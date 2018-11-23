import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('./components/cover/images/logo.svg', () => 'logo.svg');
jest.mock('./components/cover/video/puppiness.ogv', () => 'puppiness.ogv');
jest.mock('./components/cover/video/puppiness.webm', () => 'puppiness.webm');
jest.mock('./components/cover/video/puppiness.mp4', () => 'puppiness.mp4');
