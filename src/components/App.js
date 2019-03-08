import React from 'react';
// import NavBar from './NavBar';
import CNavBar from './CNavBar';

// import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <CNavBar />
            </div>
        );
    }
}

// App.propTypes = {
//     children: PropTypes.object.isRequired
// };

export default App;