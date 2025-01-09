"use client"

import React, { useState } from 'react';

const EditableBoard = () => {
    const [content, setContent] = useState("Click the button below to edit this text!");
    const [tempContent, setTempContent] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSave = () => {
        setContent(tempContent);
        setIsOpen(false);
    };

    const handleOpen = () => {
        setTempContent(content);
        setIsOpen(true);
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-4">
            {/* Board */}
            <div className="p-6 bg-white rounded-lg shadow-md" >
                <div style={{ border: "2px solid red", height: "400px" }}>
                    <p>{content}</p>
                </div>

                <div>
                    hello
                </div>


                <button
                    onClick={handleOpen}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Edit Content
                </button>

                {/* Popup */}
                {isOpen && (
                    <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Edit Board Content</h3>
                            <input
                                type="text"
                                value={tempContent}
                                onChange={(e) => setTempContent(e.target.value)}
                                placeholder="Enter new content..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditableBoard;