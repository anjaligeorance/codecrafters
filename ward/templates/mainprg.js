function scrollToStyle() {
    var styleSection = document.getElementById('style-section');
    styleSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Capture user input
    const style = document.getElementById('style').value;
    const occasion = document.getElementById('occasion').value;
    const otherStyle = document.getElementById('other-style').value;
    const otherOccasion = document.getElementById('other-occasion').value;
  
    // Call function to interact with Bard for style refinement (optional)
    refineStyleWithBard(style);
  
    // (Optional) Integrate weather API and store weather data here
    // Replace with your actual API key and city details
const apiKey = "5f9e99b5b3eeab6b1ae7981075557029";
const city = "Kochi";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the temperature (assuming "main" contains temperature data)
    const temperature = data.main.temp;
    console.log("Temperature:", temperature);

    // Optional: Convert temperature to Celsius
    const celsius = temperature - 273.15;
    console.log("Temperature (Celsius):", celsius);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });

  
    // Display a message or proceed to outfit suggestions based on user input
    console.log("User selected style:", style);
    console.log("User selected occasion:", occasion);
    console.log("Other style:", otherStyle);
    console.log("Other occasion:", otherOccasion);
    
    // (Next steps) Use user input and weather data (if available) to create outfit suggestions
  }
  
  // Function to interact with Bard for style refinement (limited functionality)
  function refineStyleWithBard(userStyle) {
    // Replace with actual method to communicate with Bard (if possible)
    console.log("Communicating with Bard...");
    
    // Simulate Bard's response for now
    let refinedStyle = userStyle;
    if (userStyle === "other") {
      refinedStyle = prompt("You entered 'other' for style. Please specify (e.g., bohemian, sporty):");
    } else if (userStyle === "casual") {
      refinedStyle = confirm("Casual sounds great! Do you prefer a more relaxed or dressed-up casual look?") ? "dressed-up casual" : "relaxed casual";
    }
    
    console.log("Bard suggests:", refinedStyle);
    
    // Update UI or store the refined style
  }
  
  // Event listener for form submission
  const userPreferencesForm = document.getElementById('user-preferences');
  userPreferencesForm.addEventListener('submit', handleFormSubmit);
  
  // Enable input for "other" style/occasion when selected
  const otherStyleInput = document.getElementById('other-style');
  const otherOccasionInput = document.getElementById('other-occasion');
  
  const handleStyleChange = (event) => {
    if (event.target.value === "other") {
      otherStyleInput.disabled = false;
    } else {
      otherStyleInput.disabled = true;
      otherStyleInput.value = ""; // Clear previous input
    }
  };
  
  const handleOccasionChange = (event) => {
    if (event.target.value === "other") {
      otherOccasionInput.disabled = false;
    } else {
      otherOccasionInput.disabled = true;
      otherOccasionInput.value = ""; // Clear previous input
    }
  };
  
  const styleSelect = document.getElementById('style');
  styleSelect.addEventListener('change', handleStyleChange);
  
  const occasionSelect = document.getElementById('occasion');
  occasionSelect.addEventListener('change', handleOccasionChange);

  // Sample wardrobe data (replace with your actual data)
const wardrobe = [
    { type: "shirt",  style: "casual", material: "cotton", weather: "normal" },
    { type: "sweater",  style: "casual", material: "wool", weather: "cold" },
    { type: "blazer",  style: "events", material: "cotton", weather: "hot" },
    { type: "jeans",  style: "casual", material: "denim", weather: "normal" },
    { type: "short",  style: "casual", material: "cotton", weather: "hot" },
    { type: "suit",  style: "events", material: "cotton", weather: "normal" },
    { type: "sweaterpant",  style: "casual", material: "wool", weather: "cold" },
    { type: "pant",  style: "casual", material: "cotton", weather: "normal" },
    { type: "blazerpant",  style: "events", material: "cotton", weather: "normal" },
  ];
  
  function suggestOutfits(style, occasion, weather) {
    // Filter clothing items based on user input
    const filteredItems = wardrobe.filter(item => {
      return item.style === style || item.style.includes(style); // Consider style variations
    });
  
    // Simple selection (choose the first match for each category)
    const top = filteredItems.find(item => item.type === "shirt" || item.type === "dress");
    const bottom = filteredItems.find(item => item.type === "pants");
  
    // ... (add logic for outerwear based on weather)
  
    return { top: top, bottom: bottom }; // Return the suggested outfit
  }
  
  // Example usage
  const userStyle = document.getElementById('style').value;
  const userOccasion = document.getElementById('occasion').value;
  const suggestedOutfit = suggestOutfits(userStyle, userOccasion);
  
  console.log("Suggested outfit:", suggestedOutfit);
  
  // Display the suggested outfit on your webpage (use DOM manipulation with Javascript)
  