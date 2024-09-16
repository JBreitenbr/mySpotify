import './App.css'
import {useState} from 'react'
import {Tooltip} from 'react-tooltip'
import {tDict} from './tracksDict'
import {bandsDict} from './bandsDict'
import tapes from './img/retro_tapes.jpg'


export default function App() {
  let [letter, setLetter]=useState()
  let [bands, setBands]=useState([])
  let [bandName, setBandName]=useState("none")
  function handleLetter(e){
    setLetter(e.target.value)
    setBands(bandsDict.find(item=>item.name===e.target.value).bands)
  }
  function handleBand(e){
    setBandName(e.target.value)
  }
  const topItems=
tDict[bandName].map(
(item,index) => {
return (
 <><li key={index} >
   <div className="ml-4 mb-4"><a data-tooltip-id={`my-anchor-element-${index}`}>
    <img src={item.imgUrl} className="h-20 w-20 sm:h-32 sm:w-32" style={{border:"1px solid #0f172a"}}/><Tooltip id={`my-anchor-element-${index}`}> <div style={{width:"80vw"}}><div><img src={item.imgUrl2} className="h-32 w-32"/><p className="text-md">{item.album}</p><p className="text-md">{item.release_date}</p></div><div><p className="text-xs">{item.tracks}</p></div></div></Tooltip></a>
   <a data-tooltip-id={`tooltip_${index}`} key={index}>
    <div className="text-sm sm:text-md mt-4 text-white">{item.track}</div>
    <Tooltip id={`tooltip_${index}`} key={index}>
  <div className="tooltip">
    <ul>
      <li>Track: {item.track}</li>
      <li>Released: {item.release_date}</li>
      <li>Key/Mode: {item.key_mode}</li>
      <li>Danceability: {item.danceability}</li>
      <li>Energy: {item.energy}</li>
      <li>Loudness: {item.loudness}</li><li>Speechiness: {item.speechiness}</li>
      <li>Acousticness: {item.acousticness}</li>
      <li>Instrumentalness: {item.instrumentalness}</li>
      <li>Liveness: {item.liveness}</li>
      <li>Valence: {item.valence}</li>
      <li>Tempo: {item.tempo}</li>
      <li>Duration (minutes): {item.duration_mins}</li>

    </ul></div></Tooltip>
 </a></div></li></>)})


  return (
    <div className="generale bg-slate-500" style={{position:"relative"}}>
     <div className="bg-slate-300 flex flex-col" style={{position: "sticky",top:"0px",width:"100vw"}}>
<h3 className="text-white text-center text-5xl h-28 mb-6 test">Julias Spotify</h3>
      <select className="mx-8" onChange={handleLetter}>
      <option>--Select Letter--</option>
        {bandsDict.map(item=>
          <option key={item.name}>{item.name}</option>
        )}
      </select>
      <select className="mb-6 mx-8" onChange={handleBand}>
        <option>--Select Band--</option>
        {bands.map(item=>
          <option key={item.name}>{item.name}</option>
        )}</select></div><br/>
      {bandName=="none"?<div className="spoti mt-9 sm:mt-36"></div>:<ul className="grid grid-cols-2">{topItems}</ul>}
    </div>
  )
}
