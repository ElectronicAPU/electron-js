import React from 'react'

const TitleBar = () => {
  return (
    <body>
      <header id="titlebar">
        <div id="drag-region">
          <div id="window-controls">
            <div className="button" id="min-button">
              <img
                className="icon"
                src="icons/min-w-10.png"
                draggable="false"
              />
            </div>

            <div className="button" id="max-button">
              <img
                className="icon"
                src="icons/max-w-10.png"
                draggable="false"
              />
            </div>

            <div className="button" id="restore-button">
              <img
                className="icon"
                src="/icons/restore-w-10.png"
                draggable="false"
              />
            </div>

            <div className="button" id="close-button">
              <img
                className="icon"
                srcSet="icons/close-w-10.png 1x, icons/close-w-12.png 1.25x, icons/close-w-15.png 1.5x, icons/close-w-15.png 1.75x, icons/close-w-20.png 2x, icons/close-w-20.png 2.25x, icons/close-w-24.png 2.5x, icons/close-w-30.png 3x, icons/close-w-30.png 3.5x"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </header>
      <div id="main">
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>

      <script>require('./renderer.js')</script>
    </body>
  )
}

export default TitleBar
