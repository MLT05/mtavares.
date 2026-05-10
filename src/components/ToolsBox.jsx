import { useState } from "react"
import { ReactSortable } from "react-sortablejs"

function ToolsBox() {
    const [tools, setTools] = useState([
        { id: 1, name: "Figma", tone: "tool-lilac" },
        { id: 2, name: "Trello", tone: "tool-cream" },
        { id: 3, name: "Jira", tone: "tool-soft" },
        { id: 4, name: "PhpStorm", tone: "tool-dark" }
    ])

    return (
        <section className="container tools-section">
            <div className="section-top">
                <p className="section-tag">Tools I use</p>
            </div>

            <div className="tools-box">
                <ReactSortable
                    list={tools}
                    setList={setTools}
                    animation={200}
                    ghostClass="tool-ghost"
                    chosenClass="tool-chosen"
                    dragClass="tool-drag"
                    className="tools-grid"
                >
                    {tools.map((tool) => (
                        <div key={tool.id} className={`tool-chip ${tool.tone}`}>
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </ReactSortable>
            </div>
        </section>
    )
}

export default ToolsBox