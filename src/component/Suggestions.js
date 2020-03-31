import React from 'react'

const Suggestions = (props) => {
 
  const options = props.results.map(r => (
  //  v = `https://royliao.pythonanywhere.com/api/article/?search=${r.title}`,
    <li key={r.id} onClick={()=>props.action(r.title)}>
      {r.title}
      

    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions

