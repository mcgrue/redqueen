import { useState, useEffect, useMemo } from 'react';
import { DnDemo } from '../components/DnDemo';

function BoardPage() {

  // usestate to keep track of the cards. clicking on them changes the boolean
  // if the card is face up or face down

  // if we're at 1500 x 1000 or more, we don't care about 'unsupported'
  // else, ask if we have a portrait orientation, and render unsupported

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [orientation, setOrientation] = useState(screen.orientation);

  useEffect(() => {
    const onResizeListener = (e: any) => {
      setInnerWidth(window.innerWidth)
      setInnerHeight(window.innerHeight)
      setOrientation(screen.orientation)
    }
    window.addEventListener('resize', onResizeListener)

    // effects need to clean up on unmount
    return () => window.removeEventListener('resize', onResizeListener)
  }, [])

  const isUnsupported = useMemo(() => {
    if (innerWidth < 1500 || innerHeight < 1000) {
      if (orientation?.type == 'portrait-primary' || orientation?.type == 'portrait-secondary') {
        return true;
      }
    }

    return false;
  }, [innerHeight, innerWidth, orientation]);

  const unsupportedMarkup = <div>Unsupported</div>;
  const regularMarkup = <header className="App-header">
    Board Game

    <div style={{ width: '100%', height: '100%' }}>
      <DnDemo />
    </div>
  </header>;

  return (
    <div className="BoardPage">
      {isUnsupported ? unsupportedMarkup : regularMarkup}
    </div>
  );
}

export default BoardPage;