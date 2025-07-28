import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Problem from "../Problem/Problem";
import {
  fetchAllProblems,
  dispatchAllProblems,
} from "../../../../redux/actions/problemAction";
import { dispatchAddProblem } from "../../../../redux/actions/problemAction";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";
import { isEmpty } from "../../../utils/validation/Validation";
import { toast } from "react-toastify";
import "./Problems.css";
import API from './../../../../utils/axios';

const Problems = () => {
  const [problem, setProblem] = useState({
    name: "",
    description: "",
    tag_one: "",
    tag_two: "",
    submitted: "0",
  });
  const [dialog, setDialog] = useState(false);

  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const fetchProblems = async () => {
    const res = await fetchAllProblems(token);
    dispatch(dispatchAllProblems(res));
  };

  useEffect(() => {
    fetchProblems();
  }, []);
  const closeBox = () => {
    setDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProblem({ ...problem, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      isEmpty(
        problem.name &&
          problem.description &&
          problem.tag_one &&
          problem.tag_two
      )
    ) {
      toast.error("All fields should be filled !", { theme: "colored" });
      return;
    }
    try {
      var res = await API.post(
        `/api/problem/add`,
        {
          name: problem.name,
          description: problem.description,
          tag_one: problem.tag_one,
          tag_two: problem.tag_two,
          submitted: problem.submitted,
        },
        {
          headers: { Authorization: token },
        }
      );
      dispatch(dispatchAddProblem(res));
      toast.success("Problem added succesfully !", { theme: "colored" });
      closeBox();
    } catch (err) {
      toast.error("Error ! Already submitted for review", { theme: "colored" });
    }
  };

  return (
    <div className="problem-container-lg">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1 style={{ textAlign: "center" }}>Problems</h1>
        <button
          className="btn btn-success add_button"
          onClick={() => setDialog(!dialog)}
        >
          Add Problem
        </button>
      </div>
      <div className="dialog_box">
        {dialog && (
          <>
            <ReactDialogBox
              closeBox={closeBox}
              modalWidth="80%"
              headerBackgroundColor="#0d9460"
              headerTextColor="white"
              headerHeight="65"
              closeButtonColor="white"
              bodyBackgroundColor="white"
              bodyTextColor="black"
              bodyHeight="500px"
              headerText="Add Problem"
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    Problem Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="input"
                    name="name"
                    cols={20}
                    rows={1}
                    value={problem.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    Problem Description
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    id="input"
                    name="description"
                    cols={40}
                    rows={3}
                    value={problem.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    Technology Used
                  </label>
                  <select
                    className="form-select"
                    value={problem.tag_one}
                    name="tag_one"
                    onChange={handleInputChange}
                    aria-label="Default select example"
                  >
                    <option value="React">React</option>
                    <option value="Node">Node</option>
                    <option value="Express">Express</option>
                    <option value="Angular">Angular</option>
                    <option value="SQL">SQL</option>
                    <option value="C">C</option>
                    <option value="Python">Python</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    Category
                  </label>
                  <select
                    className="form-select"
                    value={problem.tag_two}
                    name="tag_two"
                    onChange={handleInputChange}
                    aria-label="Default select example"
                  >
                    <option value="Web_Development">Web Development</option>
                    <option value="Mobile_Development">
                      Mobile Development
                    </option>
                    <option value="Game_Development">Game Development</option>
                    <option value="Data_Science">Data Science</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Computer_security">Computer security</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  className="btn btn-success add_button"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>

      <Problem />
    </div>
  );
};

export default Problems;
