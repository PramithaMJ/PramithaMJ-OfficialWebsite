import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/resume/download.svg';
import { useEffect, useRef, useState } from 'react';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { LinearProgress } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../components/Themes';
import ParticlesComponent from '../../subComponents/ParticleComponent';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  'https://raw.githubusercontent.com/PramithaMJ/PramithaMJ-OfficialWebsite/main/src/assets/cv/Pramitha_CV.pdf';

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setPdfPageWidth(pdfWrapper.current?.getBoundingClientRect().width || null);
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const renderPages = () => {
    const pages = [];
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      pages.push(
        <Page
          key={pageNumber}
          onLoadSuccess={removeTextLayerOffset}
          loading={<LinerProgress />}
          width={pdfPageWidth}
          pageNumber={pageNumber}
        />
      );
    }
    return pages;
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      
      
 <div>
  <ParticlesComponent />
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>
        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinearProgress />}
            file={{ url: resumeLink }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {renderPages()}
          </Document>
        </div>
      </div>
    </div>
    </ThemeProvider>
   
  );
};

export default Resume;
