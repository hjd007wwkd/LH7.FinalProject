import React from 'react';

const RightPanel = () => {
  
  return (
    <div className="rightpanel">
      <div className="pos-f-t">
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable.</span>
          </div>
        </div>
      </div>

      <div>
        LOWER PANEL
      </div>
    </div>
  );
}

export default RightPanel;