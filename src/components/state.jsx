import "./styles.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const toggleMachine = createMachine({
    id: "toggle",
    initial: "inactive",
    context: {
      count: 0
    },
    states: {
      inactive: {
        on: { TOGGLE: "active" }
      },
      active: {
        entry: assign({ count: (ctx) => ctx.count + 1 }),
        on: { TOGGLE: "inactive" }
      }
    }
  });
  
  function State() {
    const [state, send] = useMachine(toggleMachine);
    const active = state.matches("active");
    const { count } = state.context;
  
    return (
      <div className="State">
        <h1>XState React Template</h1>
        <h2>Fork this template!</h2>
        <button onClick={() => send("TOGGLE")}>
          Click me ({active ? "✅" : "❌"})
        </button>{" "}
        <code>
          Toggled <strong>{count}</strong> times
        </code>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<State />, rootElement);
