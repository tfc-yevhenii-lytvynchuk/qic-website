function initRangeSlider(config) {
  const {
    containerId,
    min = 0,
    max = 9999,
    initialMin = min,
    initialMax = max
  } = config;

  const slider = document.getElementById(containerId);
  if (!slider) {
    console.warn(`Range slider container not found: ${containerId}`);
    return;
  }

  const progress = slider.querySelector('.qic-range-slider-slider-progress');
  const minPriceInput = slider.querySelector('.min-price');
  const maxPriceInput = slider.querySelector('.max-price');
  const minInput = slider.querySelector('.min-input');
  const maxInput = slider.querySelector('.max-input');

  if (!progress || !minPriceInput || !maxPriceInput || !minInput || !maxInput) {
    console.warn('Some range slider elements not found in container:', containerId, {
      progress: !!progress,
      minPriceInput: !!minPriceInput,
      maxPriceInput: !!maxPriceInput,
      minInput: !!minInput,
      maxInput: !!maxInput
    });
    return;
  }

  // Find the parent form
  const form = slider.closest('form');

  // Set initial values and attributes
  const initializeSlider = () => {
    minInput.min = min;
    minInput.max = max;
    minInput.value = initialMin;
    maxInput.min = min;
    maxInput.max = max;
    maxInput.value = initialMax;
    minPriceInput.min = min;
    minPriceInput.max = max;
    minPriceInput.value = initialMin;
    maxPriceInput.min = min;
    maxPriceInput.max = max;
    maxPriceInput.value = initialMax;
    updateProgress();
  };

  const updateProgress = () => {
    const minValue = parseInt(minInput.value);
    const maxValue = parseInt(maxInput.value);

    // get the total range of the slider
    const range = max - min;
    // get the selected value range of the progress
    const valueRange = maxValue - minValue;
    // calculate the width percentage
    const width = (valueRange / range) * 100;
    // calculate the min thumb offset
    const minOffset = ((minValue - min) / range) * 100;

    // update the progress width
    progress.style.width = width + "%";
    // update the progress left position
    progress.style.left = minOffset + "%";

    // update the number inputs
    minPriceInput.value = minValue;
    maxPriceInput.value = maxValue;
  };

  const updateRange = (event) => {
    const input = event.target;

    let minVal = parseInt(minPriceInput.value);
    let maxVal = parseInt(maxPriceInput.value);

    // Ensure values are within bounds
    minVal = Math.max(min, Math.min(minVal, max));
    maxVal = Math.max(min, Math.min(maxVal, max));

    if (input === minPriceInput && minVal > maxVal) {
      maxVal = minVal;
      maxPriceInput.value = maxVal;
    } else if (input === maxPriceInput && maxVal < minVal) {
      minVal = maxVal;
      minPriceInput.value = minVal;
    }

    minInput.value = minVal;
    maxInput.value = maxVal;

    updateProgress();
  };

  // Handle form reset
  const handleFormReset = () => {
    // Use setTimeout to allow the form reset to complete first
    setTimeout(() => {
      initializeSlider();
    }, 0);
  };

  minPriceInput.addEventListener("input", updateRange);
  maxPriceInput.addEventListener("input", updateRange);

  minInput.addEventListener("input", () => {
    if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
      maxInput.value = minInput.value;
    }
    updateProgress();
  });

  maxInput.addEventListener("input", () => {
    if (parseInt(maxInput.value) <= parseInt(minInput.value)) {
      minInput.value = maxInput.value;
    }
    updateProgress();
  });

  // Add form reset event listener
  if (form) {
    form.addEventListener('reset', handleFormReset);
  }

  let isDragging = false;
  let startOffsetX;

  progress.addEventListener("mousedown", (e) => {
    e.preventDefault(); // prevent text selection

    isDragging = true;

    startOffsetX = e.clientX - progress.getBoundingClientRect().left;

    slider.classList.toggle("dragging", isDragging);
  });

  const handleMouseMove = (e) => {
    if (isDragging) {
      // get the size and position of the slider
      const sliderRect = slider.getBoundingClientRect();
      const progressWidth = parseFloat(progress.style.width || 0);

      // calculate the new left position for the progress element
      let newLeft =
        ((e.clientX - sliderRect.left - startOffsetX) / sliderRect.width) * 100;

      // ensure the progress is not exceeding the slider boundaries
      newLeft = Math.min(Math.max(newLeft, 0), 100 - progressWidth);

      // update the progress position
      progress.style.left = newLeft + "%";

      // calculate the new min thumb position
      const range = max - min;
      const newMin = Math.round((newLeft / 100) * range) + min;
      const newMax = newMin + parseInt(maxInput.value) - parseInt(minInput.value);

      // update the min input
      minInput.value = newMin;
      maxInput.value = newMax;

      // update the progress
      updateProgress();
    }
    slider.classList.toggle("dragging", isDragging);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      isDragging = false;
    }
    slider.classList.toggle("dragging", isDragging);
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  // Initialize the slider
  initializeSlider();

  // Return cleanup function
  return () => {
    minPriceInput.removeEventListener("input", updateRange);
    maxPriceInput.removeEventListener("input", updateRange);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    if (form) {
      form.removeEventListener('reset', handleFormReset);
    }
  };
}