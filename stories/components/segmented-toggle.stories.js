import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SegmentedToggle' };

function toggle(activeTab) {
  const phoneStyle = activeTab === 'phone'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;
  const emailStyle = activeTab === 'email'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;
  return `
    <div style="
      display:inline-flex;
      background:${tokens.colorGrey100};
      border-radius:${tokens.radiusFull}px;
      padding:4px;
      gap:4px;
    ">
      <div style="
        padding:${tokens.space200}px ${tokens.space400}px;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        ${phoneStyle}
      ">Phone</div>
      <div style="
        padding:${tokens.space200}px ${tokens.space400}px;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        ${emailStyle}
      ">Email</div>
    </div>
  `;
}

export const PhoneActive = () => toggle('phone');
export const EmailActive = () => toggle('email');
