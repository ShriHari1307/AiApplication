import { useState } from "react";
import "./Examples/examples.css"
import WorkflowCard from "./Examples/workflow-card";
import CodeEditor from "./Examples/code-editor";
import { workflowOptions } from "./Examples/lib/data";

export default function Examples() {
    const [selectedWorkflow, setSelectedWorkflow] = useState(workflowOptions[0]);
    return (
       <section id="examples">
         <div className="items-center justify-between px-[1rem] max-w-screen-lg mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-5 border-[#292c32] border-x md:pl-1 border-b md:overflow-hidden">
            {/* Left sidebar with workflow options */}
            <div className="md:col-span-2 bg-black md:border-b-0 sticky border-b top-14 md:border-r border-[#292c32] ">
                <div className="flex md:flex-col  overflow-x-auto scroll-container p-4 pb-2">
                {workflowOptions.map((workflow) => (
                  <WorkflowCard
                  key={workflow.id}
                  title={workflow.title}
                  description={workflow.description}
                  isSelected={selectedWorkflow.id === workflow.id}
                  onClick={() => setSelectedWorkflow(workflow)}
                  />
                ))}
                </div>
            </div>

            {/* Right side with code editor */}
            <div className="col-span-1 md:col-span-3 border-[#292c32]">
              <CodeEditor code={selectedWorkflow.code} />
            </div>
          </div>
        </div>
       </section>
    )
  }