import React from 'react';

function Header({number, data }) {
  return <div>Header - {number}
  
  
  
  {JSON.stringify(data)}</div>;

  
}

export default React.memo(Header);
