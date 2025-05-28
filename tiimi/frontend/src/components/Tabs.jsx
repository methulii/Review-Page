import { useState } from 'react';
import {
  FaUserFriends,
  FaBriefcase,
  FaCalendarAlt,
  FaClipboard,
  FaBolt,
  FaWpforms,
  FaCogs
} from 'react-icons/fa';
import './Tabs.css';

const tabItems = [
  { label: 'Candidates', icon: <FaUserFriends size={12} /> },
  { label: 'Job Info', icon: <FaBriefcase size={12} /> },
  { label: 'Calendar', icon: <FaCalendarAlt size={12} /> },
  { label: 'Score Card', icon: <FaClipboard size={12} /> },
  { label: 'Activity', icon: <FaBolt size={12} /> },
  { label: 'Application Form', icon: <FaWpforms size={12} /> },
  { label: 'Automation', icon: <FaCogs size={12} /> }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Candidates');

  return (
    <div className="tabs-container">
      {tabItems.map(({ label, icon }) => (
        <div
          key={label}
          className={`tab-item ${activeTab === label ? 'active' : ''}`}
          onClick={() => setActiveTab(label)}
        >
          <span className="tab-icon">{icon}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
