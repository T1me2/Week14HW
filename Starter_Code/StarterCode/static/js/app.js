//read in the sample data
const sample_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let mydata;
let names;
let meta_data;
let samples;

//read int the data
d3.json(sample_data).then(function(data){
    // build ddl of names
    names = data.names
    samples = data.samples
    meta_data = data.meta_data
    console.log(names)
    console.log(samples)
});
    


    // build ddl of names
    // add event to DDL on change (alls modify plot functions)
    // build initial plot 
    // put above three into first d3

// });


print(mydata)

// build ddl of names
// add event to DDL on change (alls modify plot functions)
// build initial plot 