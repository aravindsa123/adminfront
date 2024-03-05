
import './Topbar.css'
import './Home.css'
import { Button} from '@mui/material'
import { Link } from 'react-router-dom'


const Topbar = (props) => {
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <p>MEDICARE</p>
        </div>
       
        <div className='topright'>

       <Link to='http://localhost:3001/'> <Button variant="contained" onClick={props.xxx} >SIGN OUT</Button></Link>
         
        </div>

      </div>
    </div>
  )
}

export default Topbar