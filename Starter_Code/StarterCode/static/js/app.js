//read in the sample data
const sample_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let mydata;
let names;
let meta_data;
let samples;

function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  
    Plotly.newPlot("bar", data);
}

//read int the data
d3.json(sample_data).then(function(data){
    // build ddl of names
    names = data.names
    samples = data.samples
    meta_data = data.meta_data
    
    
    // isert id's into dropdown menu
    names.forEach(name => d3.select("#selDataset").append('option').text(name));
    
    // //Initialize the page with a default plot
    // function init() {
    //     data = [{
    //       x: [1, 2, 3, 4, 5],
    //       y: [1, 2, 4, 8, 16] }];
      
    //     Plotly.newPlot("bar", data);
    // }

    //upon drop down selection, update the bar chart
    d3.selectAll("#selDataset").on("change", updatePlotly)

    function updatePlotly() {
    //select the dropdown menu
        let dropdownMenu = d3.select("#selDataset");
    //assign the value of the dropdown menu to a variable
        let dataset = dropdownMenu.property("value");
    
    
        let tracker = dataset

        //loop through until selected id is found, stop index there
        for (let i = 0; i < samples.length; ++i) {
            if (samples[i].id === tracker) {break;}
            x = samples[i].otu_ids;
            y = samples[i].sample_values;
            console.log(x)
        }
        
        
        
    }

    

    
});


// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly() {
//     let dropdownMenu = d3.select("#selDataset").property("value", names);

//     // dataset = names
// }

// updatePlotly();

// d3.select("#selDataset").append('option').text(names);

// console.log(names)
// d3.selectAll("#selDataset").on("change", updatePlotly);
// function init()


    // build ddl of names
    // add event to DDL on change (alls modify plot functions)
    // build initial plot 
    // put above three into first d3

// });

// build ddl of names
// add event to DDL on change (alls modify plot functions)
// build initial plot 