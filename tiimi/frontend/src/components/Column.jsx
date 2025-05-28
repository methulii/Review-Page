import CandidateCard from './CandidateCard';
import styles from './CandidateCard.module.css';

const Column = ({ 
  title, 
  stageKey,
  candidates, 
  color, 
  onCandidateClick, 
  onUpdateCandidate,
  onDragStart,
  onDrop,
  onDragOver
}) => {
  return (
    <div
      style={{
        minWidth: '250px',
        height: '60vh',
        background: '#E8EBF0',
        borderRadius: '12px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
      onDrop={() => onDrop(stageKey)}
      onDragOver={onDragOver}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div
            style={{
              color: '#fff',
              backgroundColor: color,
              fontWeight: '600',
              padding: '6px 12px',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {title}
          </div>
          <span
            style={{
              color: '#000',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            {candidates.length}
          </span>
        </div>

        <a
          href="#"
          style={{
            color: '#000',
            fontSize: '12px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          Detail
        </a>
      </div>

      <div className={styles.scrollable} style={{ maxHeight: '60vh' }}>
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            data={{ ...candidate, stage: title.toLowerCase().replace(' ', '') }}
            onClick={() => onCandidateClick(candidate)}
            onUpdate={onUpdateCandidate}
            onDragStart={() => onDragStart(candidate, stageKey)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;