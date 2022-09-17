import React from "react";
import DownloadLink from "react-download-link";



function Resume() {

    return (
        <section>
            <DownloadLink
                label="Resume"
                filename="PCResume.docx"
                exportFile={() => "Resume Downloaded"}
            />
            <span>THIS WILL BE A RESUME</span>
        </section>
    )
};

export default Resume;
