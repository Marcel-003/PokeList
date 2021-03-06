import React from 'react';

const Nickname = () => {

    return(
        <form>
            <div className="form-group">
                <h3>Success!!!</h3>
                <label>Nickname</label>
                <input type="text" className="form-control" placeholder="Enter nickname"/>
            </div>            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>        
    );
}

export default Nickname;