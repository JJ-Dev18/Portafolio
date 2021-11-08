import React from 'react'
import { ProjectAdmin } from '../PaginaPortafolio';
import { AdminScreen } from './AdminScreen';
import { ProjectsScreen } from './ProjectsScreen';



export const DashBoardAdmin = () => {
  const [showProject, setshowProject] = useState(true);
  return (
    <AdminScreen setshowProject={setshowProject} showProject={showProject}>
      <ProjectAdmin
        showProject={showProject}
        onUpdate={() => <ProjectsScreen />}
      />
    </AdminScreen>
  );
};
