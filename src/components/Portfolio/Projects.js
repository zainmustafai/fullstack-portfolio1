import c1 from './images/c1.jpg'
import c2 from './images/c1.jpg'
import r1 from './images/r1.jpg'
import r2 from './images/r2.jpg'
import r3 from './images/r3.jpg'
import n1 from './images/n1.jpg'
import n2 from './images/n2.jpg'
import n3 from './images/n3.jpg'

export const reactProjects=[
    {
        title:'Roambi',
        type:'JavaScript/React',
        img: r1
    },
    {
        title:'Bombi',
        type:'JavaScript / React',
        img: r2
    },
    {
        title:'Khambi',
        type:'JavaScript / React',
        img: r3
    },
]
export const csharpProjects=[
    {
        title:'C Sharp 1',
        type:'C#',
        img: c1
    },
    {
        title:'C Sharp 2',
        type:'C#',
        img: c2
    },

]
export const nodeProjects=[
    
        {
            title:'Node 1',
            type:'Node / JavaScript',
            img: n1
        },
        {
            title:'Node 2',
            type:'Node',
            img: n2
        },
        {
            title:'Node 1',
            type:'Node',
            img: n3
        },
]

export const AllProjects = [
    ...csharpProjects,...reactProjects,...nodeProjects
] 