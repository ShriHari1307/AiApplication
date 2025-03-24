import { useState } from "react";
import "./Examples/examples.css"
import WorkflowCard from "./Examples/workflow-card";
import CodeEditor from "./Examples/code-editor";
import { workflowOptions } from "./Examples/lib/data";

export default function Examples() {
    const [selectedWorkflow, setSelectedWorkflow] = useState(workflowOptions[0]);
    return (
       <section id="examples">
         <div className="items-center justify-between">
         <div className="grid grid-cols-1 md:grid-cols-5 relative w-full">
            {/* Left sidebar with workflow options */}
            <div className="md:col-span-2 bg-black sticky  border-b md:border-b top-14 md:border-r border-[#292c32]">
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
            <div className="col-span-1 md:col-span-3 border-b border-[#292c32]">
              <CodeEditor code={selectedWorkflow.code} />
            </div>
          </div>
        </div>
       </section>
    )
  }