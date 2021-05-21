// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var metadata = data.samples; 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = data.metadata.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the metadata array.
    var metadata = metadataArray[0];

    // 3. Create a variable that holds the washing frequency.
    var frequency = parseFloat(metadata.wfreq);

    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: frequency,
      title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0, 10] },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "yellowgreen" },
          { range: [8, 10], color: "green" },
        ],
        threshold: {
          line: { color: "black", width: 4 },
          thickness: 0.75,
          // value: 490
          }
      }
    }
  ];
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 555, height: 450, margin: { t: 0, b: 0 } 
  };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
