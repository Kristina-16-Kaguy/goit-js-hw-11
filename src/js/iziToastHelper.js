import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../fonts/style.css';

export function showError(message) {
  iziToast.error({
    message: message,
    color: '#ef4040',
    icon: 'icon-error',
  });
}

export function showOk(message) {
  iziToast.success({
    message: message,
    color: '#59A10D',
    icon: 'icon-ok',
  });
}
