export const VisivilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure you wnat to delete it?')) {
            cleanTasks();
        }
    }
    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isChecked}
                    onChange={e => setShowCompleted(e.target.checked)}
                />{" "}
                <label htmlFor="form-check-label">Show tasks done</label>
            </div>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Clear
            </button>
        </div>
    )
}