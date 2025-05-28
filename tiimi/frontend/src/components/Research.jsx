import './Research.css';
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
  FaShare,
  FaSearch,
  FaUser,
  FaLeaf,
  FaChevronCircleDown,
  FaBriefcase
} from 'react-icons/fa';

const Research = () => {
  return (
    <div className="research-header">
      <div className="header-top unified-header">
        <div className="left-side">
          <button className="icon-button">
            <FaArrowLeft />
          </button>
          <div className="job-title">Research and Development Officer</div>
          <button className="icon-button">
            <FaChevronLeft />
          </button>
          <button className="icon-button">
            <FaChevronRight />
          </button>
          <div className="one-of-eight">1 of 8</div>
        </div>
        <div className="right-side">
          <button className="icon-button1">
            <FaEllipsisH />
          </button>
          <button className="button button-primary">
            <FaShare />
            <span>Share & Promote</span>
          </button>
        </div>
      </div>

      <div className="research-tags">
        <button className="tag open">
          <span>Open</span>
          <FaChevronCircleDown size={12} />
        </button>
        <div>.</div>
        <button className="tag role">
          <FaSearch size={12} color='#166534' />
          <span>Researcher</span>
        </button>
        <div>.</div>
        <button className="tag location">
          <FaBriefcase size={12} />
          <span>Onsite</span>
        </button>
        <div>.</div>
        <button className="tag created-by">
          <FaUser size={12} />
          <span>Created by</span>
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginLeft: '-4px'
        }}>
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Bagus Fikri"
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span style={{
            fontSize: '12px',
            fontWeight: '500',
            color: '#334155'
          }}>Bagus Fikri</span>
        </div>
      </div>
    </div>
  );
};

export default Research;