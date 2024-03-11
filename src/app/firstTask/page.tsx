
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const headers = {
    'private-key': process.env.NEXT_PUBLIC_PRIVATE_KEY
};

interface Category {
    circle_icon: string;
    description: null | string;
    disable_shipping: number;
    id: number;
    image: string;
    name: string;
    slug: string;
}

interface Option {
    child: boolean;
    id: number;
    name: string;
    parent: number;
    slug: string;
}

interface SubCategory {
    description: null | string;
    id: number;
    list: boolean;
    name: string;
    options: Option[];
    other_value: null | string;
    parent: null | string;
    slug: string;
    type: null | string;
    value: string;
}

interface OtherCategory {
    showOther: boolean;
    id: number | null;
}

const FormComponent: React.FC = () => {
    const [mainCategories, setMainCategories] = useState<Category[]>([]);
    const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
    const [childSubCategories, setChildSubCategories] = useState<SubCategory[]>([]);
    const [activeItem, setActiveItem] = useState<OtherCategory>({
        showOther: false,
        id: null
    });


    useEffect(() => {
        axios.get<{ data: { categories: Category[] } }>('https://staging.mazaady.com/api/v1/get_all_cats', { headers })
            .then(response => {
                // console.log(response.data.data.categories);
                setMainCategories(response.data.data.categories)
            })
            .catch(error => console.error(error));
    }, []);

    const handleMainCategoryChange = () => {
        axios.get<{ data: SubCategory[] }>(`https://staging.mazaady.com/api/v1/properties?cat=${13}`, { headers })
            .then(response => {
                // console.log(response.data.data[1].options[9]);
                console.log(response.data.data);

                setSubCategories(response.data.data);

            })
            .catch(error => console.error(error));
    };

    const handleSubCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>, subCategory: SubCategory) => {
        const value = event.target.value;

        if (!value) return;

        if (value === "other") {
            setActiveItem({
                showOther: true,
                id: subCategory.id
            });
        } else {
            axios.get<{ data: SubCategory[] }>(`https://staging.mazaady.com/api/v1/get-options-child/${value}`, { headers })
                .then(response => {
                    console.log(response);
                    setChildSubCategories(response.data.data);
                })
                .catch(error => console.error(error));
            setActiveItem({
                showOther: false,
                id: subCategory.id
            });
        }
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    };


    return (
        <div className="flex justify-center items-center m-auto w-[600px]">
            <form className="bg-white p-8 shadow-md rounded-lg w-full" onSubmit={handleSubmit}>

                {/* Main  categories*/}
                <label htmlFor="mainCategory" className="block mb-4 text-lg font-medium text-gray-800">
                    Main Category
                </label>
                <select
                    id="mainCategory"
                    name="mainCategory"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleMainCategoryChange}
                >
                    <option value="">Select Main Category</option>
                    {mainCategories.map(category => (
                        <option key={category.id} value={category.id.toString()}>{category.name}</option>
                    ))}
                </select>

                {/* Sub categories*/}
                {subCategories.map(subCategory => (
                    <div key={subCategory.id}>
                        <label htmlFor={`select-${subCategory.id}`}>{subCategory.name}</label><br />
                        <select id={`select-${subCategory.id}`} onChange={(event) => handleSubCategoryChange(event, subCategory)} className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Select an option</option>
                            {subCategory.options.map(option => (
                                <option key={option.id} value={option.id}>{option.name}</option>
                            ))}
                            <option value="other">Other</option>
                        </select>

                        {!activeItem.showOther && activeItem.id === subCategory.id && childSubCategories.map(subCategory => (
                            <div key={subCategory.id}>
                                <label htmlFor={`select-${subCategory.id}`}>{subCategory.name}</label><br />
                                <select id={`select-${subCategory.id}`} className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500">
                                    <option value="">Select an option</option>
                                    {subCategory.options.map(option => (
                                        <option key={option.id} value={option.id}>{option.name}</option>
                                    ))}
                                </select>
                            </div>
                        ))}

                        {activeItem.showOther && activeItem.id === subCategory.id && (
                            <input
                                type="text"
                                placeholder="From the user"
                                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            />
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );


};

export default FormComponent;

