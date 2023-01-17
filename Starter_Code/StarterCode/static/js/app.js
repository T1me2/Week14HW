//read in the sample data
const sample_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let mydata;
let names;
let meta_data;
let samples;
let id_tags = []

//create function that updates plotly, pass it tracker so it updates with the first value in the dropdown b4 something is selected
function updatePlotly(tracker) {
    
    let sample = samples.filter(obj => obj.id == tracker)[0]
        console.log(sample)
        

        let bary = sample.otu_ids.slice(0,10).map(id => "OTU ID: " + id)
        let barx = sample.sample_values.slice(0,10)
        let bar_label = sample.otu_labels.slice(0,10)

        bardata = [{
              x: barx,
              y: bary,
              ticktext: bar_label,
              type: "bar",
              orientation: "h"
            }];

        let barlayout = {
        xaxis: {
            tickmode: "array",
            tickvals: barx.length,
            ticktext: barx,
            
        }
        };
        let bubblex = sample.otu_ids
        let bubbley = sample.sample_values
        let bubmarkersize = sample.sample_values
        let bubblecolor = sample.otu_ids
        let bubtext = sample.id
        
    let bubmetadata = meta_data.filter(obj => obj.id == tracker)[0]
        console.log(bubmetadata)

        console.log(bubblex)
        console.log(bubbley)
        console.log(bubmarkersize)
        console.log(bubblecolor)
        console.log(bubtext)

        bubble_data = [{
            x: bubblex,
            y: bubbley,
            mode: 'markers',
            marker: {
                size: bubmarkersize
            }
            }];

        let  bubble_layout = {
            title: "OTU ID: " + bubtext,
            height: 800,
            width: 1400,
            showlegend: true

        };
    

    Plotly.newPlot("bar", bardata, barlayout);
    Plotly.newPlot("bubble", bubble_data, bubble_layout); 
    
    
            
        }
    
    

function optionChanged(dropdownid) {

    
    updatePlotly(dropdownid)
}

//read int the data
d3.json(sample_data).then(function(data){
    // build ddl of names
    names = data.names
    samples = data.samples
    meta_data = data.meta_data
    
    // isert id's into dropdown menu
    names.forEach(name => d3.select("#selDataset").append('option').text(name));
        
    optionChanged(940); 

}); 


