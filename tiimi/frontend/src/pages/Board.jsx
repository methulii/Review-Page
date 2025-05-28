import { useState, useEffect } from 'react';
import Column from '../components/Column';
import CandidateModal from '../components/CandidateModal';
import { candidates as initialCandidates } from '../data/candidates';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Research from '../components/Research';
import Tabs from '../components/Tabs';
import Filters from '../components/Filters';

const Board = () => {
  const [selected, setSelected] = useState(null);
  const [filteredCandidates, setFilteredCandidates] = useState(null);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [displayedCandidates, setDisplayedCandidates] = useState(initialCandidates);
  const [draggedCandidate, setDraggedCandidate] = useState(null);

  const stages = [
    { key: 'applyingPeriod', title: 'Applying Period', color: '#f97316' },
    { key: 'screening', title: 'Screening', color: '#a855f7' },
    { key: 'interview', title: 'Interview', color: '#3b82f6' },
    { key: 'test', title: 'Test', color: '#10b981' }
  ];

  const handleUpdateCandidate = (id, rating, referred) => {
    const updatedCandidates = { ...candidates };
    for (let stageKey in updatedCandidates) {
      updatedCandidates[stageKey] = updatedCandidates[stageKey].map((c) =>
        c.id === id ? { ...c, rating, referred } : c
      );
    }
    setCandidates(updatedCandidates);
  };

  const handleDragStart = (candidate, stageKey) => {
    setDraggedCandidate({ ...candidate, sourceStage: stageKey });
  };

  const handleDrop = (targetStageKey) => {
    if (!draggedCandidate) return;
    
    const { sourceStage } = draggedCandidate;
    if (sourceStage === targetStageKey) return;

    const updatedCandidates = { ...candidates };
    
    updatedCandidates[sourceStage] = updatedCandidates[sourceStage].filter(
      c => c.id !== draggedCandidate.id
    );
    
    const { sourceStage: _, ...candidateToAdd } = draggedCandidate;
    updatedCandidates[targetStageKey] = [...updatedCandidates[targetStageKey], candidateToAdd];
    
    setCandidates(updatedCandidates);
    setDraggedCandidate(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (filteredCandidates) {
      const newDisplayed = {
        applyingPeriod: filteredCandidates.filter((c) =>
          candidates.applyingPeriod.some((ac) => ac.id === c.id)
        ),
        screening: filteredCandidates.filter((c) =>
          candidates.screening.some((sc) => sc.id === c.id)
        ),
        interview: filteredCandidates.filter((c) =>
          candidates.interview.some((ic) => ic.id === c.id)
        ),
        test: filteredCandidates.filter((c) =>
          candidates.test.some((tc) => tc.id === c.id)
        )
      };
      setDisplayedCandidates(newDisplayed);
    } else {
      setDisplayedCandidates(candidates);
    }
  }, [filteredCandidates, candidates]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      overflowX: 'auto'
    }}>
      <div style={{ 
        flexGrow: 1,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        left: 0,
        backgroundColor: 'white',
        minWidth: 'fit-content'
      }}>
        <Header />
      </div>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '100px', flexGrow: 1 }}>
          <Research />
          <Tabs />
          <Filters onSearch={setFilteredCandidates} />

          <div style={{ display: 'flex', gap: '20px', padding: '18px', overflowX: 'auto' }}>
            {stages.map((stage) => (
              <Column
                key={stage.key}
                stageKey={stage.key}
                title={stage.title}
                candidates={displayedCandidates[stage.key] || []}
                color={stage.color}
                onCandidateClick={setSelected}
                onUpdateCandidate={handleUpdateCandidate}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              />
            ))}
          </div>

          <CandidateModal candidate={selected} onClose={() => setSelected(null)} />
        </div>
      </div>
    </div>
  );
};

export default Board;