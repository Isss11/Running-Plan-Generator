const RunnerForm = ({ onClick, goalDistance, setGoalDistance, startingWeeklyDistance, setStartingWeeklyDistance, weeklyIncrease, setWeeklyIncrease, useMiles, setUseMiles }) => {
    const isWeeklyIncreaseHigh = () => {
        return weeklyIncrease > 10;
    }

    const KM_TO_MILE = 0.6214;
    const MAX_WEEKLY_STARTING_DISTANCE_KMS = 80;

    const getMaxStartingDistance = () => {
        return Math.floor(useMiles ? MAX_WEEKLY_STARTING_DISTANCE_KMS * KM_TO_MILE : MAX_WEEKLY_STARTING_DISTANCE_KMS);
    }

    return (
        <div>
            <h2>Runner Information</h2>
            <form>
                <label htmlFor="goalDistance"><strong>Goal Distance</strong></label>
                <select className="form-select" value={goalDistance} onChange={setGoalDistance}>
                    <option value="5 KM">5 KM</option>
                    <option value="10 KM">10 KM</option>
                    <option value="Half Marathon">Half Marathon</option>
                    <option value="Marathon">Marathon</option>
                </select>
                <label htmlFor="startingWeeklyDistance"><strong>Starting Weekly Distance</strong></label>
                <br></br>
                <input className="form-range" type="range" min="0" max={getMaxStartingDistance()} step="1" value={startingWeeklyDistance} onChange={setStartingWeeklyDistance} id="startingWeeklyDistance" />
                <br></br>
                <label htmlFor="weeklyIncrease"><strong>Weekly Distance Increase</strong><br></br></label>
                <br></br>
                <input className="form-range" type="range" min="1" max="30" step="1" value={weeklyIncrease} onChange={setWeeklyIncrease}
                    id="weeklyIncrease" />
                <br></br>
                <div className="form-check">
                    <label className="form-check-label" htmlFor="metricDisabled"><strong>Use Miles</strong></label>
                    <input className="form-check-input" type="checkbox" id="metricDisabled" name="metricDisabled" checked={useMiles} onChange={setUseMiles} />
                </div>
                <br></br>

                <div>
                    <div><strong>Goal Distance: </strong> {goalDistance}</div>
                    <div><strong>Starting Weekly Distance:</strong> {startingWeeklyDistance} {useMiles ? "Miles" : "KMs"}</div>
                    <div><strong>Distance Increase Each Week:</strong> {weeklyIncrease}%</div>
                    {isWeeklyIncreaseHigh() && <div>Increasing distance by over 10% a week is is unsafe. Be careful!</div>}
                </div>

                <br></br>

                <button className="btn btn-primary" onClick={onClick}>Generate Training Plan</button>
            </form>
        </div>
    )
}

export default RunnerForm;