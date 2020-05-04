import React,{Component} from 'react';
import '../Components/Wedo.css'
import Compo from '../Components/Compo';

class Wedo extends Component{


    render(){
        return (<div className="maincointainer">
               <h1 className="title">WHAT WE DO FOR YOU!</h1>
                <Compo icon="fa fa-male" sevicename="egestas" serviceinbrief="libero nunc consequat interdum id varius morbi sit "></Compo>
                <Compo icon="fas fa-cloud" sevicename="integer " serviceinbrief="iaculis urna id volutpat lacusmorbi icd laoreet "></Compo>
                <Compo icon="fas fa-heart" sevicename="eget " serviceinbrief="vitae sapien pellentesque habitant morbi tristique"></Compo>
                <Compo icon="fas fa-car" sevicename="aliquet" serviceinbrief="pharetra et ultrices neque ornare aenean"></Compo>
             
                
              </div>);
    }
}

export default Wedo;