import React, { use } from 'react';
import { NavLink } from 'react-router';
// import '../components/Main/Main.css'

const categoriesData = fetch('/categories.json').then(res => res.json())

const Category = () => {
    const categories = use(categoriesData)
    
    return (
        <div className='grid grid-cols-1'>
                {
                categories.map(cate => <NavLink key={cate.id} className="btn bg-base-100 border-0 hover:bg-base-200 hover:text-primary text-accent" to={`/category/${cate.id}`}>{cate.name}</NavLink>)
            }
        </div>
    );
};

export default Category;