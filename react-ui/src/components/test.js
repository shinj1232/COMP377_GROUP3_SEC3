import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

//

//
function App() {
  //state variable for the screen, admin or student
  const [screen, setScreen] = useState('auth');
  //store input field data, studentNum and password
  //const [studentNum, setStudentNum] = useState();
  //const [password, setPassword] = useState();
  //store input field data, sepal length, sepal width, petal length, petal width
  const [mean_radius, setMeanRadius] = useState();
  const [mean_texture, setMeanTexture] = useState();
  const [mean_perimeter, setMeanPerimeter] = useState();
  const [mean_area, setMeanArea] = useState();
  const [mean_smoothness, setMeanSmoothness] = useState();
  const [mean_compactness, setMeanCompactness] = useState();
  const [mean_concavity, setMeanConcavity] = useState();
  const [mean_concave_points, setMeanConcavePoints] = useState();
  const [mean_symmetry, setMeanSymmetry] = useState();
  const [mean_fractal_dimension, setMeanFractalDimension] = useState();

  const[radius_error, setRadiusError] = useState();
  const[texture_error, setTextureError] = useState();
  const[perimeter_error, setPerimeterError] = useState();
  const[area_error, setAreaError] = useState();
  const[smoothness_error, setSmoothnessError] = useState();
  const[compactness_error, setCompactnessError] = useState();
  const[concavity_error, setConcavityError] = useState();
  const[concave_points_error, setConcavePointsError ] = useState();
  const[symmetry_error, setSymmetryError] = useState();
  const[fractal_dimension_error, setFractalDimensionError] = useState();

  const[worst_radius, setWorstRadius] = useState();
  const[worst_texture, setWorstTexture] = useState();
  const[worst_perimeter, setWorstPerimeter] = useState();
  const[worst_area, setWorstArea] = useState();
  const[worst_smoothness, setWorstSmoothness] = useState();
  const[worst_compactness, setWorstCompactness] = useState();
  const[worst_concavity, setWorstConcavity] = useState();
  const[worst_concave_points, setWorstConcavePoints] = useState();
  const[worst_symmetry, setWorstSymmetry] = useState();
  const[worst_fractal_dimension, setWorstFractalDimension] = useState();

  const [result, setResult] = useState();
  const [sent, setSent] = useState();
  const [epochs, setEpochs] = useState();

  const apiUrl = "http://localhost:3000/predict";
  // send studentNum and password to the server
  // for initial authentication
  const input = async () => {
    //console.log('calling auth')
    //console.log(studentNum)
    try {
    

     const userInput = [ {
                          a:parseFloat(mean_radius),
                          b:parseFloat(mean_texture) ,
                          c:parseFloat(mean_perimeter) , 
                          d:parseFloat(mean_area), 
                          e:parseFloat(mean_smoothness), 
                          f:parseFloat(mean_compactness),
                          g:parseFloat(mean_concavity),
                          h:parseFloat(mean_concave_points),
                          i:parseFloat(mean_symmetry),
                          j:parseFloat(mean_fractal_dimension),
                          k:parseFloat(radius_error),
                          l:parseFloat(texture_error),
                          m:parseFloat(perimeter_error),
                          n:parseFloat(area_error),
                          o:parseFloat(smoothness_error),
                          p:parseFloat(compactness_error),
                          q:parseFloat(concavity_error),
                          r:parseFloat(concave_points_error),
                          s:parseFloat(symmetry_error),
                          t:parseFloat(fractal_dimension_error),
                          u:parseFloat(worst_radius),
                          v:parseFloat(worst_texture),
                          w:parseFloat(worst_perimeter),
                          x:parseFloat(worst_area),
                          y:parseFloat(worst_smoothness),
                          z:parseFloat(worst_compactness),
                          a2:parseFloat(worst_concavity),
                          b2:parseFloat(worst_concave_points),
                          c2:parseFloat(worst_symmetry),
                          d2:parseFloat(worst_fractal_dimension),
                        }]
     //console.log("UserInput: "+userInput.data.epochs);
     //console.log("species: " +species);
     setSent(userInput);
      const res = await axios.post(apiUrl, userInput);
      //console.log(res.data.test);
      console.log("result: "+ res.data.prediction[1]);
      
      if(res.data.prediction[1] !== undefined)
      {
          setResult(res.data.prediction[1]);
      }

      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console.log('err:' + res.data.screen);
      }
    } catch (e) { //print the error
      console.log(e);
    }
  
  };
  
  

    return (
   
        <div className="container" >
            <div className="row">
            <div className='col-sm'>
                <label>Mean Radius(6.981  28.11): </label>
                <br/>
                <input type="number" onChange={e => setMeanRadius(e.target.value)} />
                <br/>
                <label>Mean texture (9.71   39.28): </label>
                <br/>
                <input type="number" onChange={e => setMeanTexture(e.target.value)} />
                <br/>
                <label>Mean perimeter (43.79  188.5): </label>
                <br/>
                <input type="number" onChange={e => setMeanPerimeter(e.target.value)} />
                <br/>
                <label>Mean area (143.5  2501.0): </label>
                <br/>
                <input type="number" onChange={e => setMeanArea(e.target.value)} />
                <br/>
                <label>Mean smoothness (0.053  0.163): </label>
                <br/>
                <input type="number" onChange={e => setMeanSmoothness(e.target.value)} />
                <br/>
                <label>Mean compactness (0.019  0.345): </label>
                <br/>
                <input type="number" onChange={e => setMeanCompactness(e.target.value)} />
                <br/>
                <label>Mean concavity (0.0    0.427): </label>
                <br/>
                <input type="number" onChange={e => setMeanConcavity(e.target.value)} />
                <br/>
                <label>Mean concave points (0.0    0.201): </label>
                <br/>
                <input type="number" onChange={e => setMeanConcavePoints(e.target.value)} />
                <br/>
                <label>Mean symmetry (0.106  0.304): </label>
                <br/>
                <input type="number" onChange={e => setMeanSymmetry(e.target.value)} />
                <br/>
                <label>Mean fractal dimension (0.05   0.097): </label>
                <br/>
                <input type="number" onChange={e => setMeanFractalDimension(e.target.value)} />
                <br/>
                <br />
                <button onClick={input}>Submit</button>
            </div>
            <div className='col-sm'>
                <label>Radius error (0.112  2.873): </label>
                <br/>
                <input type="number" onChange={e => setRadiusError(e.target.value)} />
                <br/>
                <label>Texture error (0.36   4.885): </label>
                <br/>
                <input type="number" onChange={e => setTextureError(e.target.value)} />
                <br/>
                <label>Perimeter error (0.757  21.98): </label>
                <br/>
                <input type="number" onChange={e => setPerimeterError(e.target.value)} />
                <br/>
                <label>Area error (6.802  542.2): </label>
                <br/>
                <input type="number" onChange={e => setAreaError(e.target.value)} />
                <br/>
                <label>Smoothness error (0.002  0.031): </label>
                <br/>
                <input type="number" onChange={e => setSmoothnessError(e.target.value)} />
                <br/>
                <label>Compactness error (0.002  0.135): </label>
                <br/>
                <input type="number" onChange={e => setCompactnessError(e.target.value)} />
                <br/>
                <label>Concavity error (0.0    0.396): </label>
                <br/>
                <input type="number" onChange={e => setConcavityError(e.target.value)} />
                <br/>
                <label>Concave points error (0.0    0.053): </label>
                <br/>
                <input type="number" onChange={e => setConcavePointsError(e.target.value)} />
                <br/>
                <label>Symmetry error (0.008  0.079): </label>
                <br/>
                <input type="number" onChange={e => setSymmetryError(e.target.value)} />
                <br/>
                <label>Fractal dimension error (0.001  0.03): </label>
                <br/>
                <input type="number" onChange={e => setFractalDimensionError(e.target.value)} />
                <br/>
            </div>
            <div className='col-sm'>
                <label>Worst radius (7.93   36.04): </label>
                <br/>
                <input type="number" onChange={e => setWorstRadius(e.target.value)} />
                <br/>
                <label>Worst texture (12.02  49.54): </label>
                <br/>
                <input type="number" onChange={e => setWorstTexture(e.target.value)} />
                <br/>
                <label>Worst perimeter (50.41  251.2): </label>
                <br/>
                <input type="number" onChange={e => setWorstPerimeter(e.target.value)} />
                <br/>
                <label>Worst area (185.2  4254.0): </label>
                <br/>
                <input type="number" onChange={e => setWorstArea(e.target.value)} />
                <br/>
                <label>Worst smoothness (0.071  0.223): </label>
                <br/>
                <input type="number" onChange={e => setWorstSmoothness(e.target.value)} />
                <br/>
                <label>Worst compactness (0.027  1.058): </label>
                <br/>
                <input type="number" onChange={e => setWorstCompactness(e.target.value)} />
                <br/>
                <label>Worst concavity (0.0    1.252): </label>
                <br/>
                <input type="number" onChange={e => setWorstConcavity(e.target.value)} />
                <br/>
                <label>Worst concave points (0.0    0.291): </label>
                <br/>
                <input type="number" onChange={e => setWorstConcavePoints(e.target.value)} />
                <br/>
                <label>Worst symmetry (0.156  0.664): </label>
                <br/>
                <input type="number" onChange={e => setWorstSymmetry(e.target.value)} />
                <br/>
                <label>Worst fractal dimension (0.055  0.208): </label>
                <br/>
                <input type="number" onChange={e => setWorstFractalDimension(e.target.value)} />
                <br/>
            </div>
            {result !== undefined 
                ?
                <div className='col-sm'>
                    <h2>Predicted Result</h2>
                    <h5>Result</h5>         
                    { result == 1
                      ?
                      <p>The patient has malignant cancer</p>
                      :
                      <p>The patient has benign cancer</p>
                    }

                </div>
                
                :
                <div className='col-sm'></div>
               
            }
            </div>
        </div>
        
    );
}

export default App;

