const modalStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000
};

const CandidateModal = ({ candidate, onClose }) => {
  if (!candidate) return null;

  return (
    <div style={modalStyle} onClick={onClose}>
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          width: '300px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{candidate.name}</h2>
        <p><strong>Applied:</strong> {candidate.appliedDate}</p>
        <p><strong>Rating:</strong> {candidate.rating} ⭐</p>
        {candidate.referred && <p style={{ color: 'green' }}>Referred ✅</p>}
        <button onClick={onClose} style={{ marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
};

export default CandidateModal;
