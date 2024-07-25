export const color = [
    "White",
    "Black",
    "Maroon",
    "Beige",
    "Pink",
    "Yellow",
    "Brown",
    "Green",
    "Blue"
];

//multiselect filter
export const filters = [
    {
        id: "color",
        name : "Color",
        options: [
            {value : "white", label: "White"},
            {value : "blue",  label: "Blue"},
            {value : "brown", label: "Brown"},
            {value : "green", label: "Green"},
            {value : "black", label: "Black"},
            {value : "yellow", label: "Yellow"},
            {value : "maroon", label: "Maroon"},
            {value:  "beige",  label: "Beige"},
            {value:  "pink",  label: "Pink"},
            {value:  "grey",  label: "Grey"},
            {value: "orange", label: "Orange"},
        ],
    },
    {
        id: "size",
        name: "Size",
        options : [
            {value : "XS", label: "XS"},
            {value : "S", label: "S"},
            {value : "M", label: "M"},
            {value : "L", label: "L"},
            {value : "XL", label: "XL"},
        ],
    },
];

//single filter --> for the radio btns

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "159-399", label: "₹159-₹399"},
            {value: "399-999", label : "₹399-₹999"},
            {value: "999-1999", label : "₹999-₹1999"},
            {value: "1999-2999", label : "₹1999-₹2999"},
            {value: "2999-4999", label : "₹2999-₹4999"},
        ],
    },

    {
        id: "availability",
        name : "Availability",
        options : [
            {value: "instock", label: "In Stock"},
            {value: "outofstock", label : "Out of Stock"},
        ],

    }

]