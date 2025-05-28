import { useState } from "react";
import "./Sidebar.css";
import {
  Home,
  Calendar,
  MessageSquare,
  CircleUserRound,
  User,
  Clock,
  CircleDollarSign,
  Building2,
  ClipboardList,
  Settings,
  HelpCircle,
  MessageSquareWarning
} from "lucide-react";

const menuItems = [
  { icon: <Home size={20} />, label: "Home" },
  { icon: <Calendar size={20} />, label: "Calendar" },
  { icon: <MessageSquare size={20} />, label: "Message" },
  { icon: <CircleUserRound size={20} />, label: "User" },
  { type: "divider" }, // First divider
  { icon: <User size={20} />, label: "Candidates" },
  { icon: <Clock size={20} />, label: "Time" },
  { type: "divider" }, // Second divider
  { icon: <CircleDollarSign size={20} />, label: "Profit"},
  { icon: <Building2 size={20} />, label: "Branches" },
  { icon: <ClipboardList size={20} />, label: "Ratings" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sidebar">
      <div className="logo">FIK</div>

      <div className="menu">
        {menuItems.map((item, index) => {
          if (item.type === "divider") {
            return <div key={`divider-${index}`} className="menu-divider" />;
          }
          
          const btnIndex = menuItems
            .slice(0, index)
            .filter(i => i.type !== "divider")
            .length;

          return (
            <button
              key={item.label}
              className={`menu-btn ${activeIndex === btnIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(btnIndex)}
              title={item.label}
            >
              {item.icon}
            </button>
          );
        })}
      </div>

      <div className="bottom-help">
        <button className="help-btn" title="Help">
          <Settings size={22} />
        </button>
        <button className="help-btn" title="Help">
          <MessageSquareWarning size={22} />
        </button>
        <button className="help-btn" title="Help">
          <HelpCircle size={22} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;