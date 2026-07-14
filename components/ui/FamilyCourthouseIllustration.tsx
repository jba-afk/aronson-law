"use client";

import { useEffect, useRef, useState } from "react";

export default function FamilyCourthouseIllustration() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = illustrationRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={illustrationRef}
      aria-hidden="true"
      className={`family-courthouse-illustration absolute inset-0 flex items-center justify-center overflow-hidden ${
        isVisible ? "family-courthouse-visible" : ""
      }`}
    >
      {/* Subtle drafting-paper background */}
      <div
        className="family-sketch-grid absolute inset-0 opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(122, 20, 35, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122, 20, 35, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Warm architectural glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(197,154,61,0.11),transparent_60%)]" />

      <svg
        viewBox="0 0 960 680"
        className="relative z-10 h-auto w-[112%] max-w-none text-[#243f59] lg:w-[118%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main courthouse massing */}
        <g
          className="family-drawing-lines family-stage-1"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.82"
        >
          <path d="M222 245L480 112L738 245" />
          <path d="M254 245H706" />
          <path d="M281 245V485" />
          <path d="M679 245V485" />
          <path d="M281 485H679" />

          <path d="M321 202L480 121L639 202" />
          <path d="M344 202H616" />

          <path d="M259 485H701" />
          <path d="M241 507H719" />
          <path d="M218 530H742" />
          <path d="M197 551H763" />
        </g>

        {/* Pediment and architectural depth */}
        <g
          className="family-drawing-lines family-stage-2"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.64"
        >
          <path d="M321 202L350 217H610L639 202" />
          <path d="M350 217L480 151L610 217" />
          <path d="M377 217L480 165L583 217" />

          <path d="M297 245L312 229H648L663 245" />
          <path d="M292 258H668" />

          <path d="M293 472H667" />
          <path d="M287 485L296 472" />
          <path d="M673 485L664 472" />

          <path d="M480 151V199" />
          <path d="M447 184H513" />

          <circle cx="480" cy="181" r="12" />
          <path d="M480 169V181L488 186" />
        </g>

        {/* Columns and portico */}
        <g
          className="family-drawing-lines family-stage-2"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        >
          <path d="M320 270V457" />
          <path d="M361 270V457" />
          <path d="M402 270V457" />
          <path d="M443 270V457" />

          <path d="M517 270V457" />
          <path d="M558 270V457" />
          <path d="M599 270V457" />
          <path d="M640 270V457" />

          <path d="M310 270H330" />
          <path d="M351 270H371" />
          <path d="M392 270H412" />
          <path d="M433 270H453" />

          <path d="M507 270H527" />
          <path d="M548 270H568" />
          <path d="M589 270H609" />
          <path d="M630 270H650" />

          <path d="M310 457H330" />
          <path d="M351 457H371" />
          <path d="M392 457H412" />
          <path d="M433 457H453" />

          <path d="M507 457H527" />
          <path d="M548 457H568" />
          <path d="M589 457H609" />
          <path d="M630 457H650" />
        </g>

        {/* Entrance, windows, cupola, and roof details */}
        <g
          className="family-drawing-lines family-stage-3"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.71"
        >
          {/* Entrance */}
          <path d="M447 354V480" />
          <path d="M513 354V480" />
          <path d="M447 354C447 329 461 316 480 316C499 316 513 329 513 354" />
          <path d="M480 317V480" />
          <path d="M454 397H506" />
          <path d="M455 443H505" />

          {/* Left windows */}
          <path d="M297 304H342V359H297Z" />
          <path d="M319.5 304V359" />
          <path d="M297 331.5H342" />

          <path d="M297 387H342V442H297Z" />
          <path d="M319.5 387V442" />
          <path d="M297 414.5H342" />

          {/* Right windows */}
          <path d="M618 304H663V359H618Z" />
          <path d="M640.5 304V359" />
          <path d="M618 331.5H663" />

          <path d="M618 387H663V442H618Z" />
          <path d="M640.5 387V442" />
          <path d="M618 414.5H663" />

          {/* Cupola */}
          <path d="M427 112H533" />
          <path d="M440 112V82H520V112" />
          <path d="M449 82L457 65H503L511 82" />
          <path d="M458 65V39H502V65" />
          <path d="M466 39L480 22L494 39" />
          <path d="M480 22V8" />

          <path d="M451 94H509" />
          <path d="M465 65V82" />
          <path d="M480 65V82" />
          <path d="M495 65V82" />

          <circle cx="480" cy="51" r="8.5" />
          <path d="M480 42.5V51L485 55" />
        </g>

        {/* Building texture and restrained pen shading */}
        <g
          className="family-drawing-lines family-stage-3"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.27"
        >
          <path d="M286 281H312" />
          <path d="M286 374H312" />
          <path d="M648 281H674" />
          <path d="M648 374H674" />

          <path d="M350 291H376" />
          <path d="M350 371H376" />
          <path d="M584 291H610" />
          <path d="M584 371H610" />

          <path d="M272 495H688" />
          <path d="M250 518H710" />
          <path d="M228 540H732" />

          <path d="M341 225L360 236" />
          <path d="M373 209L394 221" />
          <path d="M566 221L587 209" />
          <path d="M600 236L619 225" />
        </g>

        {/* Trees and historic grounds */}
        <g
          className="family-drawing-lines family-stage-4"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.49"
        >
          {/* Left tree */}
          <path d="M159 526C161 470 168 414 186 352" />
          <path d="M186 352C163 336 148 312 154 286" />
          <path d="M186 352C201 327 217 307 241 293" />
          <path d="M179 373L145 344" />
          <path d="M192 343L223 319" />
          <path d="M174 414L142 389" />
          <path d="M194 398L229 370" />

          <path d="M152 289C122 299 113 326 126 347" />
          <path d="M153 286C150 254 177 238 203 251" />
          <path d="M202 251C227 237 251 255 247 283" />
          <path d="M242 293C267 310 262 338 242 351" />

          {/* Right tree */}
          <path d="M801 526C799 470 792 414 774 352" />
          <path d="M774 352C797 336 812 312 806 286" />
          <path d="M774 352C759 327 743 307 719 293" />
          <path d="M781 373L815 344" />
          <path d="M768 343L737 319" />
          <path d="M786 414L818 389" />
          <path d="M766 398L731 370" />

          <path d="M808 289C838 299 847 326 834 347" />
          <path d="M807 286C810 254 783 238 757 251" />
          <path d="M758 251C733 237 709 255 713 283" />
          <path d="M718 293C693 310 698 338 718 351" />

          {/* Grounds and pathway */}
          <path d="M84 565C208 545 334 547 480 565" />
          <path d="M480 565C626 547 752 545 876 565" />

          <path d="M276 548C326 583 365 618 398 660" />
          <path d="M684 548C634 583 595 618 562 660" />

          <path d="M303 552C342 584 375 615 407 654" />
          <path d="M657 552C618 584 585 615 553 654" />
        </g>

        {/* Warm light inside the courthouse entrance */}
        <g className="family-doorway-glow">
          <path
            d="M451 356C451 333 463 321 480 321C497 321 509 333 509 356V477H451V356Z"
            fill="rgba(197,154,61,0.13)"
            stroke="rgba(197,154,61,0.52)"
            strokeWidth="1.25"
          />
        </g>

        {/* Realistically proportioned family, seen from behind */}
        <g
          className="family-figures"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.91"
        >
          {/* Adult on the left: head, hair, neck */}
          <path
            d="M389 493C388 479 398 468 412 468C426 468 436 479 435 493"
            strokeWidth="2"
          />
          <path
            d="M391 489C392 474 401 466 413 466C425 466 433 475 434 489C428 483 423 481 416 480C407 479 399 482 391 489Z"
            strokeWidth="2.15"
          />
          <path d="M402 496V507" strokeWidth="1.8" />
          <path d="M423 496V507" strokeWidth="1.8" />

          {/* Adult on the left: coat silhouette */}
          <path
            d="M402 505C389 508 380 518 377 536L371 582C370 591 374 597 382 598"
            strokeWidth="2.25"
          />
          <path
            d="M423 505C437 508 446 519 449 537L454 582C455 591 451 597 443 598"
            strokeWidth="2.25"
          />
          <path
            d="M402 505C406 510 419 510 423 505"
            strokeWidth="1.7"
          />
          <path
            d="M394 512C400 531 402 551 401 574"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <path
            d="M431 513C425 532 423 552 424 574"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <path d="M401 574L398 616" strokeWidth="2.4" />
          <path d="M424 574L433 612" strokeWidth="2.4" />
          <path d="M398 616L388 622" strokeWidth="2.5" />
          <path d="M433 612L445 616" strokeWidth="2.5" />

          {/* Left adult arm reaching toward child */}
          <path
            d="M382 526C389 539 397 550 408 558"
            strokeWidth="2.2"
          />
          <path
            d="M408 558C419 564 428 568 437 572"
            strokeWidth="2.2"
          />
          <path
            d="M435 570C438 568 441 569 443 572"
            strokeWidth="1.65"
          />

          {/* Child: head and hair */}
          <path
            d="M456 526C456 514 465 505 477 505C489 505 498 514 498 526"
            strokeWidth="1.9"
          />
          <path
            d="M458 522C460 509 468 503 478 503C488 503 495 511 497 521C490 516 484 514 477 514C470 514 464 517 458 522Z"
            strokeWidth="2"
          />
          <path d="M468 530V538" strokeWidth="1.6" />
          <path d="M487 530V538" strokeWidth="1.6" />

          {/* Child: jacket and body */}
          <path
            d="M468 537C458 540 452 548 451 560L450 589"
            strokeWidth="2"
          />
          <path
            d="M487 537C497 540 503 548 504 560L505 589"
            strokeWidth="2"
          />
          <path
            d="M468 537C472 541 483 541 487 537"
            strokeWidth="1.55"
          />
          <path
            d="M451 589C464 594 491 594 505 589"
            strokeWidth="1.8"
          />
          <path d="M469 592L464 619" strokeWidth="2.15" />
          <path d="M488 592L494 620" strokeWidth="2.15" />
          <path d="M464 619L455 623" strokeWidth="2.25" />
          <path d="M494 620L504 622" strokeWidth="2.25" />

          {/* Child's arms */}
          <path
            d="M456 548C451 557 447 565 441 572"
            strokeWidth="1.95"
          />
          <path
            d="M499 548C505 557 510 563 516 568"
            strokeWidth="1.95"
          />

          {/* Adult on right: head and hair */}
          <path
            d="M522 489C522 475 532 464 546 464C560 464 570 475 570 489"
            strokeWidth="2"
          />
          <path
            d="M523 485C525 471 533 462 546 462C559 462 568 472 569 486C561 481 553 478 545 478C537 478 530 480 523 485Z"
            strokeWidth="2.2"
          />
          <path d="M535 493V504" strokeWidth="1.8" />
          <path d="M557 493V504" strokeWidth="1.8" />

          {/* Adult on right: coat and walking posture */}
          <path
            d="M535 503C522 506 514 515 511 532L506 578C505 588 509 594 517 596"
            strokeWidth="2.25"
          />
          <path
            d="M557 503C571 506 579 516 582 533L590 578C591 588 587 594 579 596"
            strokeWidth="2.25"
          />
          <path
            d="M535 503C539 508 553 508 557 503"
            strokeWidth="1.7"
          />
          <path
            d="M527 512C532 530 534 549 533 571"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <path
            d="M566 511C560 530 558 549 559 571"
            strokeWidth="1.2"
            opacity="0.55"
          />
          <path d="M533 571L524 611" strokeWidth="2.4" />
          <path d="M559 571L564 616" strokeWidth="2.4" />
          <path d="M524 611L513 615" strokeWidth="2.5" />
          <path d="M564 616L575 622" strokeWidth="2.5" />

          {/* Right adult arm holding child's hand */}
          <path
            d="M516 523C516 540 516 554 516 568"
            strokeWidth="2.2"
          />
          <path
            d="M516 568C512 569 508 568 505 566"
            strokeWidth="1.65"
          />

          {/* Right outer arm */}
          <path
            d="M577 525C583 542 588 554 592 566"
            strokeWidth="2.1"
          />

          {/* Clothing details */}
          <path d="M377 579C393 584 432 584 454 580" strokeWidth="1.15" opacity="0.5" />
          <path d="M507 576C527 581 568 581 589 576" strokeWidth="1.15" opacity="0.5" />
          <path d="M477 542V589" strokeWidth="1" opacity="0.45" />

          {/* Hands joined */}
          <path
            d="M437 572C439 575 442 576 445 574"
            strokeWidth="1.8"
          />
          <path
            d="M502 565C505 568 508 569 511 567"
            strokeWidth="1.8"
          />
        </g>

        {/* Soft shadows beneath the walking family */}
        <g
          className="family-drawing-lines family-stage-5"
          stroke="currentColor"
          strokeLinecap="round"
          opacity="0.22"
        >
          <path d="M365 628C391 624 423 624 451 629" strokeWidth="1.4" />
          <path d="M447 630C467 627 491 627 511 631" strokeWidth="1.25" />
          <path d="M506 628C531 624 560 625 582 631" strokeWidth="1.4" />

          <path d="M94 591H288" strokeWidth="1.05" />
          <path d="M672 591H866" strokeWidth="1.05" />
          <path d="M111 610H266" strokeWidth="0.9" />
          <path d="M694 610H849" strokeWidth="0.9" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}