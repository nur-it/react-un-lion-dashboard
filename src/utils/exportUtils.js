

export const exportToJSON = (data) => {
  const jsonData = JSON.stringify(data, null, 2); 
  const blob = new Blob([jsonData], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "statistic_data.json"; 
  link.click();
};

export const exportToCSV = (data) => {
  const headers = ["Label", ...data.labels];
  const rows = data.datasets[0].data.map((_, index) => {
    return data.datasets.map((dataset) => dataset.data[index]);
  });

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += headers.join(",") + "\n"; 

  rows.forEach((row) => {
    csvContent += row.join(",") + "\n"; 
  });

  const blob = new Blob([csvContent], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "statistic_data.csv";
  link.click();
};

// ------------------------------- Emotions----------------
// utils/exportUtils.js

export const exportEmotionToCSV = (data) => {
  const header = ["Label", "Value", "Max Value", "Color"];
  const rows = data.map((item) => [
    item.label,
    item.value,
    item.maxValue,
    item.color,
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [header, ...rows]
      .map((row) => row.join(","))
      .join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.href = encodedUri;
  link.download = "data.csv";
  link.click();
};

export const exportEmotionToJSON = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.json";
  link.click();
  URL.revokeObjectURL(url);
};
