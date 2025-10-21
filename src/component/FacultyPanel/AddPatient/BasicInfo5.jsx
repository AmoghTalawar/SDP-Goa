import axios from "axios";
import toast from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { ADD_PATIENT } from "../../../utils/apiConstant";
import "./AddPatient.scss";

const choice = ["yes", "no"];

function BasicInfo5({ prevData, data, setData, setStep, setLoading }) {

   const navigate = useNavigate();

  // Medical state variables
  const [weigthAdmission, setWeightAdmission] = useState(null);
  const [weigthDischarge, setWeightDischarge] = useState(null);
  const [height, setHeight] = useState(null);
  const [sugar, setSugar] = useState(null);
  const [otherIssue, setOtherIssue] = useState(null);
  const [withdrawl, setWithdrawl] = useState(null);
  const [pastMedical, setPastMedical] = useState(null);
  const [presentMedical, setPresentMedical] = useState(null);
  const [chronicHealth, setChronicHealth] = useState(null);
  const [pastPsychatricProblem, setPastPsychatricProblem] = useState(null);
  const [presentPsychatricProblem, setPresentPsychatricProblem] = useState(null);
  const [previousHeadInjury, setPreviousHeadInjury] = useState(null);

  // Counselor section state variables
  const [childhoodDescription, setChildhoodDescription] = useState("");
  const [childhoodExperience, setChildhoodExperience] = useState("");
  const [behaviorProblems, setBehaviorProblems] = useState("");
  const [childhoodExperience2, setChildhoodExperience2] = useState("");
  const [educationAchievements, setEducationAchievements] = useState("");
  const [educationYears, setEducationYears] = useState("");
  const [extracurricularAchievements, setExtracurricularAchievements] = useState("");
  const [religiousBelief, setReligiousBelief] = useState("");
  const [psychologicalFactors, setPsychologicalFactors] = useState("");
  const [abstinencePeriod, setAbstinencePeriod] = useState("");
  const [doctorNotes, setDoctorNotes] = useState("");
  const [doctorClarification, setDoctorClarification] = useState("");
  const [followUpNotes, setFollowUpNotes] = useState("");
  const [childhoodExperience1, setChildhoodExperience1] = useState("");

  const { id } = useParams();

  const submit = async () => {
    setLoading(true);

    // Collect all form data properly
    const counselorData = {
      childhood_description: childhoodDescription,
      childhood_experience: childhoodExperience,
      behavior_problems: behaviorProblems,
      childhood_experience_2: childhoodExperience2,
      education_achievements: educationAchievements,
      education_years: educationYears,
      extracurricular_achievements: extracurricularAchievements,
      religious_belief: religiousBelief,
      psychological_factors: psychologicalFactors,
      abstinence_period: abstinencePeriod,
      doctor_notes: doctorNotes,
      doctor_clarification: doctorClarification,
      follow_up_notes: followUpNotes,
      childhood_experience_1: childhoodExperience1,
    };

    const obj = {
      weight_while_admission_in_kg: weigthAdmission,
      weight_while_discharge_in_kg: weigthDischarge,
      height_in_ft: height,
      sugar_in_mg: sugar,
      other_issues: otherIssue,
      withdrawal_symptoms_experienced_when_the_patient_stopped: withdrawl,
      past_medical_problem: pastMedical,
      present_medical_problem: presentMedical,
      chronic_health_problem: chronicHealth,
      past_psychiatric_complication: pastPsychatricProblem,
      present_psychiatric_complication: presentPsychatricProblem,
      history_of_previous_head_injureies: previousHeadInjury,
      ...counselorData,
    };

    const newData = { ...data, ...obj };
    setData(newData);
    console.log("New Data : ", newData);

    //////////////////////Authentication Check//////////////////////

    const auth = localStorage.getItem("auth");

    if (!auth) {
      toast.error("Authentication token not found. Please login again.");
      setLoading(false);
      navigate("/login");
      return;
    }

    // Clean the token (remove any extra spaces or quotes)
    const cleanToken = auth.replace(/['"]+/g, '').trim();

    console.log("Auth token:", cleanToken);
    console.log("Token length:", cleanToken.length);
    console.log("Token starts with:", cleanToken.substring(0, 20) + "...");

    const headers = {
      Authorization: `Bearer ${cleanToken}`,
      'Content-Type': 'application/json',
    };

    try {
       console.log("Sending request to:", ADD_PATIENT);
       console.log("Request headers:", headers);
       console.log("Request data keys:", Object.keys(newData));

       const datum = await axios.post(
         ADD_PATIENT,
         { obj: newData },
         { headers: headers }
       );

       if (datum) {
         toast.success("Patient Added successfully");
         navigate("/admin/patient");
       }
     } catch (err) {
       console.error("Submit error:", err);
       console.error("Error response:", err.response);
       console.error("Error status:", err.response?.status);
       console.error("Error data:", err.response?.data);

       if (err.response?.status === 401) {
         toast.error("Authentication failed. Please login again.");
         navigate("/login");
       } else if (err.response?.status === 400) {
         toast.error(`Bad request: ${err.response?.data?.message || 'Invalid data'}`);
       } else {
         toast.error("Some error occurred. Please try again.");
       }
     }

    ////////////////////END/////////////////////

    setLoading(false);
  };

  const nextStep = () => {
    const obj = {
      weight_while_admission_in_kg: weigthAdmission,
      weight_while_discharge_in_kg: weigthDischarge,
      height_in_ft: height,
      sugar_in_mg: sugar,
      other_issues: otherIssue,
      withdrawal_symptoms_experienced_when_the_patient_stopped: withdrawl,
      past_medical_problem: pastMedical,
      present_medical_problem: presentMedical,
      chronic_health_problem: chronicHealth,
      past_psychiatric_complication: pastPsychatricProblem,
      present_psychiatric_complication: presentPsychatricProblem,
      history_of_previous_head_injureies: previousHeadInjury,
    };

    setData({ ...data, ...obj });
  };

  const update = async () => {
    // setLoading(true);

    const obj = {
      weight_while_admission_in_kg: weigthAdmission,
      weight_while_discharge_in_kg: weigthDischarge,
      height_in_ft: height,
      sugar_in_mg: sugar,
      other_issues: otherIssue,
      withdrawal_symptoms_experienced_when_the_patient_stopped: withdrawl,
      past_medical_problem: pastMedical,
      present_medical_problem: presentMedical,
      chronic_health_problem: chronicHealth,
      past_psychiatric_complication: pastPsychatricProblem,
      present_psychiatric_complication: presentPsychatricProblem,
      history_of_previous_head_injureies: previousHeadInjury,
    };

    const newData = { ...data, ...obj };

    setData(newData);

    console.log("DATA1 : ", data);

    const auth = localStorage.getItem("auth");

    if (!auth) {
      toast.error("Authentication token not found. Please login again.");
      navigate("/login");
      return;
    }

    // Clean the token (remove any extra spaces or quotes)
    const cleanAuth = auth.replace(/['"]+/g, '').trim();

    const headers = {
      Authorization: `Bearer ${cleanAuth}`,
    };

    try {
      const datum = await axios.put(
        ADD_PATIENT,
        { obj: data, id: id },
        { headers: headers }
      );

      if (datum) {
        // setLoading(false)
        toast.success("Patient Updated successfully");
        navigate("/faculty");
      }
    } catch (err) {
      // setLoading(false)

      toast.error("some error occured please try again");
      console.log(err);
    }
  };

  useEffect(() => {
    if (data) {
      setWeightAdmission(data?.weight_while_admission_in_kg);
      setWeightDischarge(data?.weight_while_discharge_in_kg);
      setHeight(data?.height_in_ft);
      setSugar(data?.sugar_in_mg);
      setOtherIssue(data?.other_issues);
      setWithdrawl(
        data?.withdrawal_symptoms_experienced_when_the_patient_stopped
      );
      setPastMedical(data?.past_medical_problem);
      setPresentMedical(data?.present_medical_problem);
      setChronicHealth(data?.chronic_health_problem);
      setPastPsychatricProblem(data?.past_psychiatric_complication);
      setPresentPsychatricProblem(data?.present_psychiatric_complication);
      setPreviousHeadInjury(data?.history_of_previous_head_injureies);

      // Initialize counselor section data
      setChildhoodDescription(data?.childhood_description || "");
      setChildhoodExperience(data?.childhood_experience || "");
      setBehaviorProblems(data?.behavior_problems || "");
      setChildhoodExperience2(data?.childhood_experience_2 || "");
      setEducationAchievements(data?.education_achievements || "");
      setEducationYears(data?.education_years || "");
      setExtracurricularAchievements(data?.extracurricular_achievements || "");
      setReligiousBelief(data?.religious_belief || "");
      setPsychologicalFactors(data?.psychological_factors || "");
      setAbstinencePeriod(data?.abstinence_period || "");
      setDoctorNotes(data?.doctor_notes || "");
      setDoctorClarification(data?.doctor_clarification || "");
      setFollowUpNotes(data?.follow_up_notes || "");
      setChildhoodExperience1(data?.childhood_experience_1 || "");
    }
  }, []);

  return (
    <div className="basic-info">
      <div className="header">
        <h2 className="w-100 text-center my-4">COUNSELLOR SECTION</h2>
      </div>

      <br />

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-12">
          <h5>
            Take a detailed Pedigree for three generation and relevant positive
            family history
          </h5>
          <textarea
            className="form-control"
            placeholder="Enter the details"
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
          ></textarea>
        </div>
      </div>

      <hr />

      <h3>CHILDHOOD AND ADOLESCENT HISTORY</h3>

      <br />

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">
            Describe your childhood / teenage years?
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the years"
            value={childhoodDescription}
            onChange={(e) => setChildhoodDescription(e.target.value)}
          />
        </div>

        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">
            Did you experience the following before 15 years?
          </label>
          <select
            class="form-select form-select-lg"
            onChange={(e) => setChildhoodExperience(e.target.value)}
            value={childhoodExperience}
          >
            <option>Please select</option>
            <option>Poverty or severe debts</option>
            <option>Early parental loss</option>
            <option>Extra marital affairs of parents</option>
            <option>Broken home or single parenting</option>
            <option>violence</option>
            <option>Sexually issue</option>
            <option>none</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">
            Behavior problem identified in Childhood / Adolenscence (before 15
            Years)?
          </label>
          <select
            class="form-select form-select-lg"
            onChange={(e) => setBehaviorProblems(e.target.value)}
            value={behaviorProblems}
          >
            <option>Please select</option>
            <option>Running away from home</option>
            <option> Frequent physical fights and violence</option>
            <option>Destruction of others property</option>
            <option>Stealing</option>
            <option>Scholastic backwardness</option>
            <option>Experimenting with drugs</option>
            <option>alcohol</option>
            <option>Gambling</option>
            <option>Sexual issues</option>
            <option>Any Other</option>
          </select>
        </div>

        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">
            Did you experience the following before 15 years?
          </label>
          <select
            class="form-select form-select-lg"
            onChange={(e) => setChildhoodExperience2(e.target.value)}
            value={childhoodExperience2}
          >
            <option>Please select</option>
            <option>Poverty or severe debts</option>
            <option>Early parental loss</option>
            <option>Extra marital affairs of parents</option>
            <option>Broken home or single parenting</option>
            <option>violence</option>
            <option>Sexually issue</option>
            <option>none</option>
          </select>
        </div>
      </div>

      <hr />

      <h3>EDUCATIONAL HISTORY</h3>

      <br />

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">
            Achievements in education (mention if any)?
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the achievements"
            value={educationAchievements}
            onChange={(e) => setEducationAchievements(e.target.value)}
          />
        </div>

        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">Years of education</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the years"
            value={educationYears}
            onChange={(e) => setEducationYears(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">
            High achiever in extracurricular activities (Mention if any)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the achievements"
            value={extracurricularAchievements}
            onChange={(e) => setExtracurricularAchievements(e.target.value)}
          />
        </div>
      </div>

      <hr />

      <h3>RELIGIOUS BELIEFS AND BEHAVIOUR</h3>

      <br />

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-12">
          <label className="input-lebel">Are you a?</label>
          <select
            class="form-select form-select-lg"
            onChange={(e) => setReligiousBelief(e.target.value)}
            value={religiousBelief}
          >
            <option>Please select</option>
            <option>beliver</option>
            <option>non believer</option>
            <option>indifferent</option>
          </select>
        </div>

        <div className="col-sm-12 mb-3 col-lg-12">
          <label className="input-lebel">
            Explore psychological factors of substance use continuation and
            relapse?
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the psychological factor"
            value={psychologicalFactors}
            onChange={(e) => setPsychologicalFactors(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-6">
          <label className="input-lebel">
            Maximum period of abstinence and possible factors for abstinence?
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the maximum period of abstinence"
            value={abstinencePeriod}
            onChange={(e) => setAbstinencePeriod(e.target.value)}
          />
        </div>
      </div>

      <hr />

      <h4>Key Points for the doctors to note</h4>

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-12">
          <textarea
            className="form-control"
            placeholder="Enter the details"
            value={doctorClarification}
            onChange={(e) => setDoctorClarification(e.target.value)}
          ></textarea>
        </div>
      </div>

      <h4>Key Points to clarify with Doctors</h4>

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-12">
          <textarea
            className="form-control"
            placeholder="Enter the details"
            value={followUpNotes}
            onChange={(e) => setFollowUpNotes(e.target.value)}
          ></textarea>
        </div>
      </div>
      <br />
      <h4>FOLLOW UP NOTES OF COUNSELORS</h4>

      <div className="row">
        <div className="col-sm-12 mb-3 col-lg-12">
          <textarea
            className="form-control"
            placeholder="Enter the details"
          ></textarea>
        </div>
      </div>

      <div className="row w-100 me-auto ml-auto">
        <div className="col-12">
          <div className="form_buttons">
            <button className="btn btn-primary" onClick={() => setStep(4)}>
              Prev
            </button>

            {prevData ? (
              <button className="btn btn-primary" onClick={() => update()}>
                Update
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => submit()}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo5;
