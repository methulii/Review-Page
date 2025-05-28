import './Filters.css';
import { 
  FiSearch, 
  FiUserPlus, 
  FiGrid, 
  FiCalendar,
  FiAward,
  FiFilter,
  FiChevronDown,
  FiSettings,
  FiClock,
  FiStar,
  FiBook,
  FiBriefcase,
  FiMapPin,
  FiSave
} from 'react-icons/fi';
import { useState } from 'react';
import { candidates } from '../data/candidates';

const Filters = ({ onSearch }) => { 
  const [activeTab, setActiveTab] = useState('date');
  const [showDateRange, setShowDateRange] = useState(false);
  const [showScoreRange, setShowScoreRange] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const allCandidates = [
      ...candidates.applyingPeriod,
      ...candidates.screening,
      ...candidates.interview,
      ...candidates.test
    ];
    
    const filtered = term.length > 0 
      ? allCandidates.filter(candidate => 
          candidate.name.toLowerCase().includes(term.toLowerCase())
        )
      : null;
    
    if (onSearch) {
      onSearch(filtered);
    }
  }

  return (
    <div className="filters-container">
      <div className="search-input">
        <FiSearch className="search-icon" size={16} />
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="filter-options">
        <div className="filter-dropdown">
          <button 
            className={`filter-tab ${activeTab === 'date' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('date');
              setShowDateRange(!showDateRange);
              setShowScoreRange(false);
              setShowAdvanced(false);
            }}
          >
            <FiCalendar size={16} />
            <span>Date Range</span>
            <FiChevronDown size={16} className="dropdown-arrow" />
          </button>
          {showDateRange && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <FiClock size={14} />
                Last 7 days
              </div>
              <div className="dropdown-item">
                <FiClock size={14} />
                Last 30 days
              </div>
              <div className="dropdown-item">
                <FiClock size={14} />
                Last 90 days
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">Custom Range...</div>
            </div>
          )}
        </div>

        <div className="filter-dropdown">
          <button 
            className={`filter-tab ${activeTab === 'score' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('score');
              setShowScoreRange(!showScoreRange);
              setShowDateRange(false);
              setShowAdvanced(false);
            }}
          >
            <FiAward size={16} />
            <span>Score Range</span>
            <FiChevronDown size={16} className="dropdown-arrow" />
          </button>
          {showScoreRange && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <FiStar size={14} />
                0 - 1.5
              </div>
              <div className="dropdown-item">
                <FiStar size={14} />
                1.6 - 2.5
              </div>
              <div className="dropdown-item">
                <FiStar size={14} />
                2.6 - 3.5
              </div>
              <div className="dropdown-item">
                <FiStar size={14} />
                3.5 - 5.0
              </div>
            </div>
          )}
        </div>

        <div className="filter-dropdown">
          <button 
            className={`filter-tab ${activeTab === 'advanced' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('advanced');
              setShowAdvanced(!showAdvanced);
              setShowDateRange(false);
              setShowScoreRange(false);
            }}
          >
            <FiFilter size={16} />
            <span>Advance Filter</span>
            <FiChevronDown size={16} />
          </button>
          {showAdvanced && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <FiBook size={14} />
                Education Level
              </div>
              <div className="dropdown-item">
                <FiBriefcase size={14} />
                Experience
              </div>
              <div className="dropdown-item">
                <FiAward size={14} />
                Skills
              </div>
              <div className="dropdown-item">
                <FiMapPin size={14} />
                Location
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <FiSave size={14} />
                Save Filter
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ flex: 1 }}></div>

      <div className="filter-options">
        <button className="action-button primary-button">
          <FiUserPlus size={16} />
          Refer People
        </button>
        <button className="action-button secondary-button">
          <FiSettings size={16} />
        </button>
        <button className="action-button secondary-button">
          <FiGrid size={16} />
          Kanban
          <FiChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default Filters;