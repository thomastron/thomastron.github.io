# thomastron.github.io

https://thomastron.github.io/

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/thomastron/thomastron.github.io.git/HEAD)


DISCLAIMER 
Most of this code is built on the shoulders of giants. An effort was taken to cite the source material. 

This prominent disclaimer indicates the project is *not associated with the original material* and was **only created for educational purposes**. Much of the content was harvested and cleaned up to make better learning aids. The site shall not knowingly collect any user data. 

example content as template...
# PlaneSections
<p align="center">
  <img src="doc/img/Beam Image.png" width="500">
</p>

A lightweight finite element beam bending library built on [OpenSeesPy](https://github.com/zhuminjie/OpenSeesPy).
The goal of PlaneSections is to make easy-to-use beam anayses, which can be used to quickly document structural calculations.
Being built on OpenSees, the structural results are reliable, and there is lots of room to build more complex models.
**Note, results are only stored at nodes specified by the user - all intermediate values are linearly interpolated**


**NOTE:**
Units for force and length must be applied to the beam in a [consistent unit base for FEM](https://femci.gsfc.nasa.gov/units/index.html).
PlaneSections has been design with Metric units in mind in terms of scaling diagrams. For those using imperial units, results will work with a consitent unit basis, but the scale of the digrams may be off.

## Contents
* [Installation](https://github.com/cslotboom/planesections#Installation)
* [Features](https://github.com/cslotboom/planesections#Features)
* [Documentation](https://github.com/cslotboom/planesections#Documentation)
* [Demo](https://github.com/cslotboom/planesections#Demo)
* [Coordinates](https://github.com/cslotboom/planesections#Coordinates)
* [License](https://github.com/cslotboom/planesections#License)
* [Work Status](https://github.com/cslotboom/planesections#Status)




## Features:
2D and 3D beams can be anayzed under the following force types:
- Point loads
- Point Moments
- Line loads

## Documentation
All major functions and classes are documented on read-the-docs: https://planesections.readthedocs.io/en/latest/

## Demo
The PlaneSections can plot beam representations that can be used in documentation.


<p align="center">
  <img src="doc/img/Beam-Image-2.png" width="500">
</p>
<p align="center">
  <img src="doc/img/Beam-Image-2-SFD.png" width="500">
</p>  
<p align="center">
  <img src="doc/img/Beam-Image-2-BMD.png" width="500">
</p>  

## Coordinates
The coordinant system used for beams is as follows:
<p align="center">
  <img src="doc/img/coords/forces.JPG" width="700">
</p>


## Further Examples
See the examples folder for more examples!

## License:
Some restrictions exist for OpenSees license, so this for now this libary is restricted for resale. 
Basically, you are able to use the software for anything except commercial use external.

What you can do:
- Use PlaneSections commercially to analyze/design beams on your building.
- Develop an App that uses PlaneSections to analyze beams, and share that app within your comapny.

What you can't do:
- Use PlaneSections to develop an App, then sell that app externally to your company.

If there is any demand for resale, please reach out to the developers. The OpenSees solver can be replaced with a custom one, however due to the time investment required this will only be done if there is demand for it.


## Status
The next development steps are to:
- [] Add labels to diagrams.
- [] Finsih the readthedocs website.
- [] Add custom solver for beams.
- [] Add quadratic loads
