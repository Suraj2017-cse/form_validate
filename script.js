const formEl = document.querySelector("form");
const fName = document.getElementById("fname");
const mName = document.getElementById("mname");
const lName = document.getElementById("lname");
const dob = document.getElementById("dob");
const faName = document.getElementById("faname");
const moName = document.getElementById("moname");
const vill = document.getElementById("vill");
const post = document.getElementById("post");
const dist = document.getElementById("dist");
const state = document.getElementById("state");
const pin = document.getElementById("pin");
const email = document.getElementById("email");
const mob = document.getElementById("mob");
const qualification = document.getElementById("qualification");
const photo = document.getElementById("photo");
// const errorEl = document.querySelectorAll(".error");
const btnEl = document.querySelector(".btn")


formEl.addEventListener("click", (e) => {
  validateInputs();
})


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const dobValue = dob.value.trim();
  const faNameValue = faName.value.trim();
  const moNameValue = moName.value.trim();
  const villValue = vill.value.trim();
  const postValue = post.value.trim();
  const distValue = dist.value.trim();
  const stateValue = state.value.trim();
  const pinValue = pin.value.trim();
  const emailValue = email.value.trim();
  const mobValue = mob.value.trim();
  const qualificationValue = qualification.value.trim();
  const photoValue = photo.value.trim();

  if (fNameValue === '') {
    setError(fName, 'First Name is required');
    return false;
  } else {
    setSuccess(fName);
  }

  if (lNameValue === '') {
    setError(lName, 'Last Name is required');
    return false;
  } else {
    setSuccess(lName);
  }

  if (dobValue === '') {
    setError(dob, 'DOB is required');
    return false;
  } else {
    setSuccess(dob);
  }

  if (faNameValue === '') {
    setError(faName, `Father's Name is required`);
    return false;
  } else {
    setSuccess(faName);
  }

  if (moNameValue === '') {
    setError(moName, `Mother's is required`);
    return false;
  } else {
    setSuccess(moName);
  }

  if (villValue === '') {
    setError(vill, 'village is required');
    return false;
  } else {
    setSuccess(vill);
  }

  if (postValue === '') {
    setError(post, 'Post is required');
    return false;
  } else {
    setSuccess(post);
  }

  if (distValue === '') {
    setError(dist, 'District is required');
    return false;
  } else {
    setSuccess(dist);
  }

  if (stateValue === '') {
    setError(state, 'state is required');
    return false;
  } else {
    setSuccess(state);
  }

  if (pinValue === '') {
    setError(pin, 'pin code is required');
    return false;
  } else {
    setSuccess(pin);
  }

  if (emailValue === '') {
    setError(email, 'email is required');
    return false;
  } else {
    setSuccess(email);
  }

  if (mobValue === '') {
    setError(mob, 'Mobile no. is required');
    return false;
  } else {
    setSuccess(mob);
  }

  if (qualificationValue === '') {
    setError(qualification, 'Qualification is required');
    return false;
  } else {
    setSuccess(qualification);
  }

};

// for file photo preview
photo.onchange = evt => {
  const [file] = photo.files
  if (file) {
    blah.src = URL.createObjectURL(file)
  }
}