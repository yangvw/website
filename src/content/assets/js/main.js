document.addEventListener("DOMContentLoaded", function(_) {
  initCookieNotice();
  setupCopyButtons();

  setupTabs($('#os-archive-tabs'), 'dev.flutter.tab-os', _getOSForArchive);
  setupTabs($('#editor-setup'), 'io.flutter.tool-id');
  setupTabs($('.sample-code-tabs'), 'io.flutter.tool-id');
  setupTabs($('#vscode-to-xcode-ios-setup'), 'dev.flutter.debug.vscode-to-xcode-ios');
  setupTabs($('#vscode-to-xcode-macos-setup'), 'dev.flutter.debug.vscode-to-xcode-macos');
  setupTabs($('#vscode-to-android-studio-setup'), 'dev.flutter.debug.vscode-to-as');
  setupTabs($('#vscode-to-vs-setup'), 'dev.flutter.debug.vscode-to-vs');
  setupTabs($('#add-to-app-android'), 'dev.flutter.add-to-app.android');
  setupTabs($('#add-to-app-android-deps'), 'dev.flutter.add-to-app.android.deps');
  setupTabs($('#ios-versions'), 'dev.flutter.ios-versions');
  setupTabs($('#android-devices-vp'), 'dev.flutter.install.android-devices-vp');
  setupTabs($('#android-studio-start'), 'dev.flutter.install.android-studio-start');
  setupTabs($('#flutter-install'), 'dev.flutter.install.options');
  setupTabs($('#ios-devices-vp'), 'dev.flutter.install.ios-devices-vp');
  setupTabs($('#china-os-tabs'), 'dev.flutter.china-os');
  setupTabs($('#china-os-dl-tabs'), 'dev.flutter.china-os-dl');
  setupTabs($('#china-os-pub-tabs'), 'dev.flutter.china-os-pub');
  setupTabs($('#base-os-tabs'), 'dev.flutter.os');
  setupTabs($('#xcode-ide-vs-ui'), 'dev.flutter.xcode-ux');
});

function _getOSForArchive() {
  const os = getOS();
  // The archive doesn't have chromeos, fall back to linux.
  if (os === 'chromeos') {
    return 'linux';
  }

  return os;
}

/**
 * Get the user's current operating system, or
 * `null` if not of one "macos", "windows", "linux", or "chromeos".
 *
 * @returns {'macos'|'linux'|'windows'|'chromeos'|null}
 */
function getOS() {
  const userAgent = window.navigator.userAgent;
  if (userAgent.indexOf('Mac') !== -1) {
    // macOS or iPhone
    return 'macos';
  }

  if (userAgent.indexOf('Win')) {
    // Windows
    return 'windows';
  }

  if ((userAgent.indexOf('Linux') !== -1 || userAgent.indexOf("X11") !== -1)
    && userAgent.indexOf('Android') !== -1) {
    // Linux, but not Android
    return 'linux';
  }

  if (userAgent.indexOf('CrOS') !== -1) {
    // ChromeOS
    return 'chromeos';
  }

  // Anything else
  return null;
}

/**
 * Activate the cookie notice footer.
 */
function initCookieNotice() {
  const notice = document.getElementById('cookie-notice');
  const agreeBtn = document.getElementById('cookie-consent');
  const cookieKey = 'cookie-consent';
  const cookieConsentValue = 'true'
  const activeClass = 'show';

  if (Cookies.get(cookieKey) === cookieConsentValue) {
    return;
  }

  notice.classList.add(activeClass);

  agreeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Cookies.set(cookieKey, cookieConsentValue, { sameSite: 'strict', expires: 30 });
    notice.classList.remove(activeClass);
  });
}

// A pattern to remove terminal command markers when copying code blocks.
const terminalReplacementPattern = /^(\s*\$\s*)|(C:\\(.*)>\s*)/gm;

function setupCopyButtons() {
  if (!navigator.clipboard) {
    return;
  }

  const codeBlocks =
      document.querySelectorAll('.code-block-body');

  codeBlocks.forEach(codeBlock => {
    if (codeBlock.querySelector('pre')) {
      const copyButton = document.createElement('button');
      const innerIcon = document.createElement('span');

      copyButton.classList.add('code-copy-button');
      copyButton.title = 'Copy to clipboard';

      innerIcon.textContent = 'content_copy';
      innerIcon.ariaHidden = 'true';
      innerIcon.classList.add('material-symbols');

      copyButton.addEventListener('click', async (e) => {
        const codeBlockBody = e.currentTarget.parentElement;
        if (codeBlockBody) {
          const codePre = codeBlock.querySelector('pre');
          if (codePre) {
            const contentToCopy = codePre.textContent
                .replace(terminalReplacementPattern, '');
            if (contentToCopy && contentToCopy.length !== 0) {
              await navigator.clipboard.writeText(contentToCopy);
            }
            e.preventDefault();
          }
        }
      });

      copyButton.appendChild(innerIcon);
      codeBlock.appendChild(copyButton);
    }
  });
}
