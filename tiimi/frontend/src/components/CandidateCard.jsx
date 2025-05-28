import { useState } from 'react';
import styles from './CandidateCard.module.css';
import { FaStar, FaEllipsisV, FaEllipsisH } from 'react-icons/fa';

const CandidateCard = ({ data, onClick, onUpdate, onDragStart }) => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [rating, setRating] = useState('');
  const [referred, setReferred] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      onUpdate(data.id, parseFloat(rating), referred);
      setShowAssessment(false);
      setRating('');
      setReferred(false);
    }
  };

  return (
    <div
      className={`${styles.card} ${styles[data.stage]}`}
      onClick={!showAssessment ? onClick : undefined}
      draggable
      onDragStart={onDragStart}
    >
      <div className={styles.header}>
        {data.avatar ? (
          <img src={data.avatar} alt={data.name} className={styles.avatar} />
        ) : (
          <div className={styles.avatarPlaceholder}>
            {data.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        )}
        <div className={styles.info}>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.appliedDate}>Applied at {data.appliedDate}</div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.footer}>
        {data.rating ? (
          <div className={styles.ratingContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <FaStar color="#facc15" size={12} />
              <span className={styles.rating}>{data.rating} Overall</span>
            </div>
            {data.referred && (
              <div className={styles.referred}>Referred</div>
            )}
            <button style={{ border: 'none', background: 'none', padding: 0 }}>
              <FaEllipsisH color="#94a3b8" size={14} />
            </button>
          </div>
        ) : showAssessment ? (
          <form onSubmit={handleSubmit} className={styles.assessmentForm}>
            <input
              type="number"
              min="1"
              max="5"
              step="0.5"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className={styles.ratingInput}
            />
            <label className={styles.referredCheckbox}>
              <input
                type="checkbox"
                checked={referred}
                onChange={(e) => setReferred(e.target.checked)}
              />
              Referred
            </label>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        ) : (
          <button
            className={styles.addAssessment}
            onClick={(e) => {
              e.stopPropagation();
              setShowAssessment(true);
            }}
          >
            + Add Assessment
          </button>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;