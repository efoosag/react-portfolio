import { useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UploadProject() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("React");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const uploadProject = async () => {
    if (!file) return alert("Upload an image.");

    const imgRef = ref(storage, `projects/${file.name}`);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);

    await addDoc(collection(db, "projects"), {
      title,
      category,
      desc,
      img: url,
      createdAt: Date.now(),
    });

    alert("Project uploaded!");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-80">
      <h2 className="text-2xl font-bold dark:text-white mb-4">
        Upload New Project
      </h2>

      <input
          className="w-full p-2 mb-3 rounded bg-gray-200 dark:bg-gray-300"
        placeholder="Project Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full p-2 mb-3 bg-gray-200 dark:bg-gray-300 rounded"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>React</option>
        <option>NextJs</option>
        <option>TypeScript</option>
        <option>JavaScript</option>        
        <option>UI/UX</option>
      </select>

      <textarea
        className="w-full p-2 mb-3 bg-gray-200 dark:bg-gray-300 rounded"
        placeholder="Short description"
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        type="file"
        className="mb-3"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={uploadProject}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
}
