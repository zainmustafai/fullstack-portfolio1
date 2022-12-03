import c1 from './images/c1.jpg'
import c2 from './images/c2.jpg'
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
        img: r1,
        link:'https:www.github.com/zainmustafai'
    },
    {
        title:'Bombi',
        type:'JavaScript / React',
        img: r2,
        link:'https:www.github.com/zainmustafai'
    },
    {
        title:'Khambi',
        type:'JavaScript / React',
        img: r3,
        link:'https:www.github.com/zainmustafai'
    },
]
export const csharpProjects=[
    {
        title:'C Sharp 1',
        type:'C#',
        img: c1,
        link:'https:www.github.com/zainmustafai'
    },
    {
        title:'C Sharp 2',
        type:'C#',
        img: c2,
        link:'https:www.github.com/zainmustafai'
    },

]
export const nodeProjects=[
    
        {
            title:'Node 1',
            type:'Node / JavaScript',
            img: n1,
            link:'https:www.github.com/zainmustafai'
        },
        {
            title:'Node 2',
            type:'Node',
            img: n2,
            link:'https:www.github.com/zainmustafai'
        },
        {
            title:'Node 3',
            type:'Node',
            img: n3,
            link:'https:www.github.com/zainmustafai'
        },
]

export const AllProjects = [
    ...csharpProjects,...reactProjects,...nodeProjects
] 