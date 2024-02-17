/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { MdClose as CloseIcon } from 'react-icons/md';
import { useClickAway } from 'react-use';
import { Header, PageCard } from '~/components/elements';
import { WorkProject } from '~/lib';
import ProofCard from './ProofCard';
import ProofModal from './ProofModal';

type ProofOfWorkProps = {
  data: WorkProject[];
};
const ProofPage: React.FC<ProofOfWorkProps> = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null
  );
  const clearProject = () => setSelectedProject(null);
  const setProject = (project: WorkProject) => setSelectedProject(project);
  const modalRef: React.RefObject<HTMLDivElement> = useRef(null);
  const modalContentRef: React.RefObject<HTMLDivElement> = useRef(null);

  useClickAway(modalContentRef, () => {
    if (selectedProject) {
      clearProject();
    }
  });

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  const dragThreshold = 200;

  return (
    <>
      {/* Modal */}
      <div
        className={twMerge(
          selectedProject &&
            'fixed left-0 top-0 z-40 h-screen w-screen bg-black bg-opacity-40'
        )}
        onClick={clearProject}
      />
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="work-project-modal"
            ref={modalRef}
            className="fixed left-0 top-0 z-50 mt-[80px] h-full w-full rounded-lg bg-transparent shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > dragThreshold || Math.abs(velocity.y) > 1000) {
                clearProject();
              }
            }}
          >
            <motion.div
              className="min-w-screen relative mx-auto w-full max-w-desktop rounded-lg px-2.5 ipad:px-4 md:px-6"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            >
              <PageCard
                className="relative !m-0 h-full min-h-screen max-w-desktop border border-dracula-dark !p-0"
                ref={modalContentRef}
              >
                <div className="pb-4">
                  <div className="mx-auto mb-2 mt-3 h-2 w-12 rounded bg-gray-600" />
                  <button
                    className="absolute right-0 top-0 px-4 py-3"
                    onClick={clearProject}
                  >
                    <CloseIcon className="text-3xl" />
                  </button>
                </div>
                <div
                  className="overflow-y-auto"
                  style={{ maxHeight: 'calc(100vh - 60px)' }}
                >
                  <ProofModal
                    data={selectedProject}
                    closeModal={clearProject}
                  />
                </div>
              </PageCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header title="Proof of Work" />
      <PageCard>
        <p className="mb-4 font-bold text-dracula-light">
          Browse my personal portfolio for a closer look at my Proof of Work
          projects. Click to explore each project&apos;s specifics.
        </p>
        {/* <span>Suavecito</span> */}
        <div className="grid grid-cols-1 gap-y-5 ipad:grid-cols-2 ipad:gap-x-4 ipad:gap-y-6 md:grid-cols-2 md:gap-x-9 md:gap-y-7">
          {data.map((project) => (
            <ProofCard
              key={project._id}
              data={project}
              openModal={setProject}
            />
          ))}
        </div>
      </PageCard>
    </>
  );
};

export default ProofPage;
