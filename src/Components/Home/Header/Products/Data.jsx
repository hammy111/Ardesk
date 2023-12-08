import building from '../../../../img/productitem1.png';
import product from '../../../../img/productitem2.png';
import breathtaking from '../../../../img/productitem3.png';
import architectureIcon from '../../../../img/architectureIcon.png';
import productIcon from '../../../../img/productDesignIcon.png';
import mediaIcon from '../../../../img/mediaEntertainment.png';
import revit1 from "../../../../img/revit1.png"
import revit2 from "../../../../img/revit2-5.png"
import revit3 from "../../../../img/revit3.png"
import revit4 from '../../../../img/revit4.png'

import inventor from "../../../../img/inventor.png"
import fusion from "../../../../img/Fusion360.png"
import naviswork from "../../../../img/Naviswork_manage.png"

import dsmax from "../../../../img/3dsmax.png"
import maaya from "../../../../img/Maya.png"
import mdbx from "../../../../img/mdbx.png"
import shortgrid from "../../../../img/shortgrid.png"

export const data = [
  {
    id: 1,
    subtitle: 'Architecture Enginerring & Costruction Collection',
    title:
      'Connect building and infrastructure project teams from design to done',
    text: 'Autodesk software helps you get everyone on the same page to plan, design, construct, and deliver better projects.',
    imageBg: building,
    icon: architectureIcon,
  
  },
  {
    id: 2,
    subtitle: 'Product Design & Monufacturing Collection',
    title: 'Connect product development from the top floor to the shop floor',
    text: 'Autodesk software helps you unlock innovation to design, engineer, and manufacture better products.',
    imageBg: product,
    icon: mediaIcon,
   
  },
  {
    id: 3,
    subtitle: 'Media & Entertainment Collection',
    title:
      'Bring breathtaking scenes and characters to life for film, TV, and games',
    text: 'Autodesk software helps you get everyone on the same page to plan, design, construct, and deliver better projects.',
    imageBg: breathtaking,
    icon: productIcon,
   
  },
];


export const children = [
  {
    parentId: 1,
    icon: revit1,
    subTitle: 'AUTODESK',
    title: 'revit',
    description: 'Revit: BIM software for designers, builders, and doers',
    info: 'Model in 3D, streamline documentation, use specialized tools in a unified BIM environment.',
  },
  {
    parentId: 1,
    icon: revit2,
    subTitle: 'AUTODESK',
    title: 'autocad',
    description:
      'AutoCAD: 2D and 3D CAD software trusted by millions to draft, engineer, and automate designs anywhere, anytime',
    info: 'Design and annotate 2D geometry and 3D models with solids, surfaces, and mesh objects',
  },
  {
    parentId: 1,
    icon: revit3,
    subTitle: 'AUTODESK',
    title: 'Civil 3d',
    description:
      'Civil 3D: Comprehensive detailed design and documentation software for civil infrastructure',
    info: 'Harness the power of BIM (Building Information Modeling) for greater design coordination and project collaboration.',
  },
  {
    parentId: 1,
    icon: revit2,
    subTitle: 'AUTODESK',
    title: 'BIM Collabotate Pro',
    description: 'Revit: BIM software for designers, builders, and doers',
    info: 'Model in 3D, streamline documentation, use specialized tools in a unified BIM environment.',
  },
  {
    parentId: 1,
    icon: revit4,
    subTitle: 'AUTODESK',
    title: 'autocad LT',
    description:
      'AutoCAD LT: Best-in-class 2D design and documentation to complete projects faster ',
    info: 'Create your 2D designs with precision and best-in-class documentation features.',
  },
  {
    parentId: 2,
    icon: inventor,
    subTitle: 'AUTODESK',
    title: 'inventor',
    description:
      'Powerful mechanical design software for your most ambitious ideas.',
    info: 'Model in 3D, streamline documentation, use specialized tools in a unified BIM environment.',
  },
  {
    parentId: 2,
    icon: revit2,
    subTitle: 'AUTODESK',
    title: 'autocad',
    description:
      'AutoCAD: 2D and 3D CAD software trusted by millions to draft, engineer, and automate designs anywhere, anytime.',
    info: 'Design and annotate 2D geometry and 3D models with solids, surfaces, and mesh objects',
  },
  {
    parentId: 2,
    icon: fusion,
    subTitle: 'AUTODESK',
    title: 'Fusion 360',
    description:
      'Cloud-based software for professional product design and manufacturing.',
    info: 'Harness the power of BIM (Building Information Modeling) for greater design coordination and project collaboration.',
  },
  {
    parentId: 2,
    icon:naviswork,
    subTitle: 'AUTODESK',
    title: 'Navisworks',
    description: '3D model review, coordination, and clash detection.',
    info: 'Model in 3D, streamline documentation, use specialized tools in a unified BIM environment.',
  },
  {
    parentId: 3,
    icon: dsmax,
    subTitle: 'AUTODESK',
    title: '3ds max',
    description: '3ds Max: Create massive worlds and high-quality designs.',
    info: 'Model in 3D, streamline documentation, use specialized tools in a unified BIM environment.',
  },
  {
    parentId: 3,
    icon: maaya,
    subTitle: 'AUTODESK',
    title: 'maya',
    description:
      'Maya: Create expansive worlds, complex characters, and dazzling effects',
    info: 'Design and annotate 2D geometry and 3D models with solids, surfaces, and mesh objects',
  },
  {
    parentId: 3,
    icon: mdbx,
    subTitle: 'AUTODESK',
    title: 'arnold',
    description: 'Arnold: Render detailed 3D characters and scenes.',
    info: 'Harness the power of BIM (Building Information Modeling) for greater design coordination and project collaboration.',
  },
  {
    parentId: 3,
    icon: shortgrid,
    subTitle: 'AUTODESK',
    title: 'Mudbox',
    description: 'Mudbox: Sculpt detailed characters and models.',
    info: 'Model in 3D, streamline documentation, use specialized tools in a unified BIM environment.',
  },
];

