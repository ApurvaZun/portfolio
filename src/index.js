import React from "react";
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';

function App() {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    block 1
                </Grid>
                <Grid item xs={6}>
                    block 2
                </Grid>
            </Grid>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
